# Инструкции по развертыванию OnaQ

## Поддержка поддоменов

Для поддержки поддоменов (например, demo1.onaq.shnq.dev, demo2.onaq.shnq.dev) необходимо настроить веб-сервер (Nginx, Apache или другой).

### Пример конфигурации Nginx

```nginx
# Основной домен
server {
    listen 80;
    server_name onaq.shnq.dev www.onaq.shnq.dev;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Поддомены для демо
server {
    listen 80;
    server_name demo1.onaq.shnq.dev;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        # Можно передать параметр поддомена в приложение
        proxy_set_header X-Subdomain demo1;
    }
}

server {
    listen 80;
    server_name demo2.onaq.shnq.dev;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Subdomain demo2;
    }
}

# Backend API
server {
    listen 80;
    server_name api.onaq.shnq.dev;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Настройка DNS

Добавьте записи в DNS:

```
A     @               -> IP адрес сервера
A     www             -> IP адрес сервера
A     demo1           -> IP адрес сервера
A     demo2           -> IP адрес сервера
A     api             -> IP адрес сервера
```

### SSL сертификаты (Let's Encrypt)

```bash
sudo certbot --nginx -d onaq.shnq.dev -d www.onaq.shnq.dev -d demo1.onaq.shnq.dev -d demo2.onaq.shnq.dev -d api.onaq.shnq.dev
```

## Production развертывание

### 1. Подготовка сервера

- Установите Node.js (версия 16+)
- Установите MongoDB или используйте MongoDB Atlas
- Установите Nginx (опционально)
- Настройте firewall

### 2. Установка зависимостей

```bash
# Backend
cd backend
npm install --production

# Frontend
cd frontend
npm install
npm run build
```

### 3. Настройка переменных окружения

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=mongodb://your-mongodb-uri/onaq
NODE_ENV=production
FRONTEND_URL=https://onaq.shnq.dev
```

**Frontend (.env.production):**
```env
REACT_APP_API_URL=https://api.onaq.shnq.dev/api
```

### 4. Запуск с PM2 (рекомендуется)

```bash
# Установка PM2
npm install -g pm2

# Запуск backend
cd backend
pm2 start server.js --name onaq-backend

# Запуск frontend (если используется Node.js сервер)
cd frontend
pm2 serve build --name onaq-frontend --spa
```

### 5. Настройка автозапуска PM2

```bash
pm2 startup
pm2 save
```

### 6. Настройка Nginx для статических файлов

```nginx
server {
    listen 80;
    server_name onaq.shnq.dev;
    
    root /path/to/frontend/build;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Мониторинг

Рекомендуется настроить мониторинг:
- PM2 мониторинг: `pm2 monit`
- Логи: `pm2 logs`
- MongoDB мониторинг
- Логи Nginx

## Резервное копирование

Настройте регулярное резервное копирование:
- MongoDB база данных
- Логи приложения
- Конфигурационные файлы

