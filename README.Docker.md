# Docker Deployment Guide

Этот проект настроен для контейнеризации с использованием Docker.

## Особенности

- **Multi-stage build** - оптимизация размера финального образа
- **Nginx** - production-ready веб-сервер
- **Gzip compression** - сжатие статических ресурсов
- **Security headers** - базовые заголовки безопасности
- **Health check** - мониторинг состояния контейнера
- **Кэширование** - оптимизация загрузки статических ресурсов

## Быстрый старт

### Используя Docker Compose (рекомендуется)

```bash
# Сборка и запуск
docker-compose up -d

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

Сайт будет доступен по адресу: http://localhost:8080

### Используя Docker напрямую

```bash
# Сборка образа
docker build -t portfolio:latest .

# Запуск контейнера
docker run -d -p 8080:80 --name portfolio portfolio:latest

# Просмотр логов
docker logs -f portfolio

# Остановка и удаление
docker stop portfolio
docker rm portfolio
```

## Полезные команды

```bash
# Проверка размера образа
docker images portfolio

# Проверка работающих контейнеров
docker ps

# Проверка health check
docker inspect --format='{{.State.Health.Status}}' portfolio

# Войти в контейнер
docker exec -it portfolio sh

# Пересобрать без кэша
docker build --no-cache -t portfolio:latest .
```

## Оптимизации

1. **Multi-stage build** уменьшает размер образа с ~1GB до ~50MB
2. **Alpine Linux** используется как базовый образ
3. **.dockerignore** исключает ненужные файлы из контекста сборки
4. **Nginx** эффективно обслуживает статические файлы
5. **Gzip compression** уменьшает размер передаваемых данных

## Production deployment

Для production deployment рекомендуется:

1. Использовать registry (Docker Hub, AWS ECR, GitHub Container Registry)
2. Настроить CI/CD pipeline (GitHub Actions, GitLab CI)
3. Использовать Kubernetes или Docker Swarm для оркестрации
4. Настроить SSL/TLS через reverse proxy (Traefik, Nginx Proxy Manager)
5. Настроить мониторинг (Prometheus, Grafana)

### Пример push в Docker Hub

```bash
# Логин
docker login

# Tag образа
docker tag portfolio:latest your-username/portfolio:latest

# Push в registry
docker push your-username/portfolio:latest
```

## Kubernetes deployment (пример)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: your-username/portfolio:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  selector:
    app: portfolio
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
```

## Troubleshooting

### Контейнер не запускается
```bash
docker logs portfolio
```

### Проблемы с портами
```bash
# Проверить занятость порта
netstat -ano | findstr :8080  # Windows
lsof -i :8080                 # Linux/Mac
```

### Пересборка после изменений
```bash
docker-compose up -d --build
```
