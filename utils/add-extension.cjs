/**
 * Скрипт ищет все импорты и экспорты (from '...') и добавляет путям расширение .js или /index.js
 */

const fsPromises = require('fs/promises')
const path = require('path')

/**
 * Получить список путей до всех файлов внутри определенного каталога
 */
const getFilesPathes = async rootDirPath => {
  const filesPathes = []

  const findFiles = async dirPath => {
    const content = await fsPromises.readdir(dirPath)

    for (const fileName of content) {
      const fileAbsolutePath = path.resolve(dirPath, fileName)
      const fileStat = await fsPromises.stat(fileAbsolutePath)

      if (fileStat.isFile()) {
        filesPathes.push(fileAbsolutePath)
      } else {
        await findFiles(fileAbsolutePath)
      }
    }
  }

  await findFiles(rootDirPath)

  return filesPathes
}

/**
 * Файл существует
 */
const fileIsExists = async filePath => {
  try {
    await fsPromises.stat(filePath)
    return true
  } catch {
    return false
  }
}

/**
 * Получить тип файла
 */
const getFileType = async filePath => {
  try {
    const stat = await fsPromises.stat(filePath)

    if (stat.isDirectory()) {
      return 'directory'
    }

    if (stat.isFile()) {
      return 'file'
    }
  } catch {
    return null
  }
}

/**
 * Получить путь файла относительный указанного каталога
 */
const getRelativePath = (dirPath, relativeFilePath) => {
  const relativePath = path
    .relative(dirPath, relativeFilePath)
    .replace(/\\/g, '/')

  if (relativePath.startsWith('../')) {
    return relativePath
  }

  return `./${relativePath}`
}

/**
 * Изменить расширение на .js
 */
const changeExtensionToJS = str => {
  return str.replace('.d.ts', '.js')
}

const main = async () => {
  const distDirPath = path.resolve('./dist')
  const filesPathes = await getFilesPathes(distDirPath)
  const notResolvedImports = []

  /**
   * Сохранить импорт, который не удалось разрешить
   */
  const saveNotResolvedPath = (importPath, filePath) => {
    notResolvedImports.push({
      importPath,
      filePath,
    })
  }

  await Promise.all(
    filesPathes.map(async filePath => {
      const dirPath = path.dirname(filePath)
      const buffer = await fsPromises.readFile(filePath)
      const content = buffer.toString()
      const matches = content.matchAll(/from ["'](.+)["']/g)
      let contentWithUpdatedImports = content

      for (const match of matches) {
        const relativePath = match[1]
        const absolutePath = path.join(dirPath, relativePath)

        if (path.extname(absolutePath) === '.js') {
          continue
        }

        const fileType = await getFileType(absolutePath)
        let resolvedPathToFile

        if (fileType === 'file') {
          continue
        }

        if (fileType === 'directory') {
          const indexFilePath = path.join(absolutePath, '/index.d.ts')
          const isExists = await fileIsExists(indexFilePath)

          if (!isExists && path.extname(indexFilePath) !== '.js') {
            saveNotResolvedPath(indexFilePath, filePath)
            continue
          }

          resolvedPathToFile = changeExtensionToJS(
            getRelativePath(dirPath, indexFilePath),
          )
        }

        if (!fileType) {
          const absolutePathWithExtension = absolutePath + '.d.ts'
          const isExists = await fileIsExists(absolutePathWithExtension)

          if (!isExists) {
            saveNotResolvedPath(absolutePathWithExtension, filePath)
            continue
          }

          resolvedPathToFile = changeExtensionToJS(
            getRelativePath(dirPath, absolutePathWithExtension),
          )
        }

        contentWithUpdatedImports = contentWithUpdatedImports.replace(
          new RegExp(`(from ["'])${relativePath}(["'])`),
          '$1' + resolvedPathToFile + '$2',
        )
      }

      await fsPromises.writeFile(filePath, contentWithUpdatedImports)
    }),
  )

  console.log('notResolvedImports', notResolvedImports)
}

main()
