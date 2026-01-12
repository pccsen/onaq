# OnaQ Backend

Backend API для платформы OnaQ by shnq.

## Установка

```bash
npm install
```

## Запуск

### Режим разработки (с автоперезагрузкой)

```bash
npm run dev
```

### Production режим

```bash
npm start
```

## Переменные окружения

Создайте файл `.env` в корне папки `backend/`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onaq
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## API Endpoints

- `GET /api/health` - Проверка здоровья API
- `POST /api/contacts` - Создание заявки на подключение
- `GET /api/contacts` - Получение всех заявок (admin)
- `POST /api/feedback` - Отправка обратной связи
- `GET /api/feedback` - Получение всех отзывов (admin)
- `GET /api/demo` - Получение всех типов бизнеса
- `GET /api/demo/:businessType` - Получение демо-данных по типу бизнеса

## Структура

- `models/` - MongoDB модели (Mongoose)
- `routes/` - API маршруты
- `controllers/` - Контроллеры (опционально)
- `middleware/` - Middleware функции
- `server.js` - Главный файл сервера

