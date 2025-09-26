// src/hooks/useTranslation.js
import { useState, useEffect } from 'react';

import ru from '@/js/lang/ru.json';
import en from '@/js/lang/en.json';

const messages = { ru, en };

// --- Глобальное состояние ---
let langState = localStorage.getItem('lang') || 'ru';
const listeners = new Set();

// Функция для оповещения всех подписчиков
function updateAll() {
  listeners.forEach((listener) => listener());
}

// Экспортируем функцию изменения языка
export function changeLanguage(newLang) {
  const actualLang = newLang === 'en' ? 'en' : 'ru';
  if (actualLang !== langState) {
    langState = actualLang;
    localStorage.setItem('lang', actualLang);
    updateAll(); // Уведомляем ВСЕ компоненты
  }
}

// Сам хук
export function useTranslation() {
  const [tick, setTick] = useState(0); // используется только для принудительного ререндера

  // Подписываемся при монтировании
  useEffect(() => {
    const listener = () => setTick((t) => t + 1);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  // Текущий язык — всегда актуальный
  const lang = langState;

  // Функция перевода
  const t = (key) => {
    const keys = key.split('.');
    let result = messages[lang];
    for (let k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  };

  return { lang, changeLanguage, t };
}