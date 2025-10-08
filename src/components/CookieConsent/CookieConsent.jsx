// CookieConsent.jsx
import { useState } from 'react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Сохраните согласие в localStorage или cookie
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Опционально: сохранить отказ или просто скрыть
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  // Если пользователь уже дал ответ — не показываем
  if (typeof window !== 'undefined' && localStorage.getItem('cookieConsent')) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="container">
        <div className="cookie-consent-content">
        <p className="cookie-consent-text">
          Мы используем файлы cookie для улучшения работы сайта и персонализации контента. Продолжая использовать сайт, вы соглашаетесь с их использованием.
        </p>
        <div className="cookie-consent-buttons">
          <button className="cookie-consent-button cookie-consent-button-accept" onClick={handleAccept}>
            Принять
          </button>
          <button className="cookie-consent-button cookie-consent-button-decline" onClick={handleDecline}>
            Отклонить
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}