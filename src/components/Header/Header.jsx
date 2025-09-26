import "./Header.css";
import Logo from '@assets/images/Header-Logo.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from '@hooks/useTranslation';

import RussianFlag from '@assets/images/Russian-Flag.svg';
import BritainFlag from '@assets/images/Britain-Flag.svg';

export default function Header() {
  const { lang, changeLanguage, t } = useTranslation(); // ✅ Добавили t
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.language-dropdown');
      if (!event.target.closest('.header-language') && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  // Определяем активный флаг и текст
  const currentFlag = lang === 'en' ? BritainFlag : RussianFlag;
  const currentLabel = lang === 'en' ? 'En' : 'Ru';

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            {/* Логотип */}
            <div className="logo">
              <a href="/"><img src={Logo} alt="Логотип DevOil" /></a>
            </div>

            {/* Навигация */}
            <nav className="header-nav">
              <a href="#catalog" className="header-nav-link">{t('header.catalog')}</a>
              <a href="#aboutcompany" className="header-nav-link">{t('header.about')}</a>
              <a href="#contacts" className="header-nav-link">{t('header.contacts')}</a>
            </nav>

            <div className="header-bid-lang">
              <a href="#bid" className="get-consultation">{t('header.consultation')}</a>

              {/* Переключатель языка */}
              <div className="header-language">
                <button
                  type="button"
                  className="language-toggle"
                  onClick={() => setIsDropdownOpen(prev => !prev)}
                  aria-expanded={isDropdownOpen}
                >
                  <img src={currentFlag} alt="" width="20" height="15" />
                  {currentLabel}
                </button>

                <ul className={`language-dropdown ${isDropdownOpen ? 'visible' : ''}`}>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        changeLanguage('ru');
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
                      }}
                    >
                      <img src={BritainFlag} alt="En" width="20" height="15" /> En
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}