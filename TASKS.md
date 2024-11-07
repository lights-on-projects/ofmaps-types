
# Backlog

## type LayerOfTreeType

- `border_weight`, `cachedrop`, `child_border_width`, `font_options`, `raw_data` - неизвестно для чего используются

## Оптимизация

- Свойство `sort` определить в отдельном интерфейсе, чтобы иметь единое описания принципа работы сортировки. Оно достаточно объемное. Все интерфейсы, которые используют это свойство должны наследовать интерфейс с этим свойством.
- Слово type зарезервировано в TS для типов и в то же время часто используется в объектах данных, например `layerType`, `pointType`, `polygonType`... В первом случае, type описывает тип объекта, во втором type содержит данные об определенной группе сущности. Если руководствоваться общему соглашению, что типы описывающие объект содержат окончание `Type`, то при описании типов этих групп возникает путанница при чтении названия типа, например `LayerTypeType` или `TypeOfLayerType`. В качестве варианта решения предлагаю использовать другое слово для описания групп сущностей, например: group, kind, category, cat, model, subject.