# DevOil — Веб-платформа поставщика базовых масел

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)

**DevOil** — современная веб-платформа для компании, специализирующейся на поставках высококачественных базовых масел. Проект реализован как полноценное SPA-решение с интеграцией фронтенда (React/Vite), бэкенда (ASP.NET Core Web API) и автоматизации через **Telegram-бота на C#**.

---

## 📌 Основные возможности

- 🌐 Многоязычная поддержка (русский / английский)
- 🎯 Плавные анимации при скролле (Intersection Observer)
- 📱 Адаптивный дизайн
- 📝 Форма заявки → отправка через API → уведомление в Telegram
- 🔧 Полная локализация интерфейса без перезагрузки
- 💼 Разделы: каталог продукции, о компании, этапы сотрудничества

---

## 🛠️ Технологический стек

| Слой | Технологии |
|------|-----------|
| **Frontend** | React, Vite, JavaScript (ES6+), CSS Modules |
| **Backend** | ASP.NET Core Web API (C#) |
| **Интеграция** | Telegram Bot API (C#) |
| **Сборка** | Vite |
| **Локализация** | Кастомный хук `useTranslation`, JSON-переводы |
| **Анимации** | IntersectionObserver, CSS transitions |

---

## 🚀 Запуск проекта (фронтенд)

1. Установи зависимости:
   ```bash
   npm install
