# Website Starter

Шаблон быстрого старта для верстки новых проектов по методологии [БЭМ](https://ru.bem.info/methodology/). В качестве шаблонизатора используется [Nunjucks](https://mozilla.github.io/nunjucks/), препроцессор [Stylus](http://stylus-lang.com/), скрипты собираются с помощью [Browserify](http://browserify.org/).

## Команды

### `npm start`

Сборка проекта и запуск веб-сервера в `development` среде.

### `npm run build`

Сборка проекта в `production` среде с предварительной зачисткой каталога.

### `npm run deploy`

Выкладывает содержимое каталога `dist` в ветку репо `gh-pages`. Можно поменять название в файле `tasks/deploy.js`.

## Структура каталогов

### `app/components`

Содержит каталоги с блоками БЭМ. Каждый такой блок включает в себя все необходимое для своей работы: шаблон, стили, скрипты.

### `app/icons`

Содержит SVG-иконки, которые будут собраны в спрайт.

### `app/pages`

Содержит шаблоны страниц.

### `app/resources`

Содержит любые ресурсы, не требующие компиляции (шрифты, картинки). Содержимое этой папки при сборке копируется в `dist` без дополнительной обработки с сохранением структуры вложенных каталогов.

### `app/scripts`

На данный момент вся JS-логика проекта зашита в файл `app.js`, который при сборке подключает все зависимости в один файл.

### `app/styles`

Здесь находится общий файл стилей, а также вспомогательные модули `helpers` и микшины `mixins`.