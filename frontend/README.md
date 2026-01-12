# OnaQ Frontend

Frontend приложение для платформы OnaQ by shnq.

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm start
```

Приложение будет доступно по адресу: http://localhost:3000

## Сборка для production

```bash
npm run build
```

Собранные файлы будут в папке `build/`.

## Переменные окружения

Создайте файл `.env` в корне папки `frontend/`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Структура

- `src/components/` - React компоненты
- `src/pages/` - Страницы приложения
- `src/utils/` - Утилиты и API клиент
- `src/styles/` - Стили (Tailwind CSS)

