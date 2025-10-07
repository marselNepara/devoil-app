
import { useState, useEffect } from 'react';
import { useTranslation } from '@hooks/useTranslation';
import RussianFlag from '@assets/images/Russian-Flag.svg';
import BritainFlag from '@assets/images/Britain-Flag.svg';
// import './LanguageSwitcher.css'; // отдельный CSS (опционально)

export default function LanguageSwitcher({ isMobile = false }) {
  const { lang, changeLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.header-language')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const currentFlag = lang === 'en' ? BritainFlag : RussianFlag;
  const currentLabel = lang === 'en' ? 'En' : 'Ru';

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <div className="header-language">
      <button
        type="button"
        className="language-toggle"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <img src={currentFlag} alt={currentLabel} width="20" height="15" />
        {currentLabel}
      </button>

      <ul className={`language-dropdown ${isOpen ? 'visible' : ''}`}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeLanguage('ru');
              setIsOpen(false);
            }}
          >
            <img src={RussianFlag} alt="Ru" width="20" height="15" /> Ru
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeLanguage('en');
              setIsOpen(false);
            }}
          >
            <img src={BritainFlag} alt="En" width="20" height="15" /> En
          </a>
        </li>
      </ul>
    </div>
  );
}