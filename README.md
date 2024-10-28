# Beauty Budget Manager App

Веб интерфейс для управления личным бюджетом.

## Setup

Установка зависимостей

```bash
# yarn
yarn install
```

## Development Server

Запуск дев сервера на `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Собрать production сборку:

```bash
# yarn
yarn build
```

Локальный предпросмотр production сборки:

```bash
# yarn
yarn preview
```

## TechStack

Фреймворк - [NUXT v3](https://nuxt.com/docs/getting-started/introduction)\
Использован фреймворк, позволяющий создавать реактивный SPA, с заложенной модульностью и универсальностью использования для возможности масштабирования и имеющую готовую структуру и набор инструментов для удобного DX.

State Manager - [Pinia](https://pinia.vuejs.org)\
Рекомендован командой разработчиков Vue/Nuxt.

Стилизация - CSS / SCSS\
С помощью CSS заданы глобальные переменные и стили. SCSS использован для оптимизированной работы по переиспользованию стилей и возможностью применить функции инструмента в дальнейшем масштабировании.

Typescript \
Добавляет типизирования для быстрого выявления ошибок на этапе разработки и при масштабировании приложения.

Линтеры \
Использован Eslint, позволяющий выявить проблемные шаблоны. Prettier - для автоформатирования.

Другие библиотеки\
[Dayjs](https://day.js.org/docs/en/installation/installation) для удобной работы с датами\
[UUID](https://www.npmjs.com/package/uuid) для генерации уникального id
