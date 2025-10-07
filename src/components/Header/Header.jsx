import "./Header.css";
import Logo from '@assets/images/Header-Logo.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from '@hooks/useTranslation';
import { Link } from 'react-router-dom';
import RussianFlag from '@assets/images/Russian-Flag.svg';
import BritainFlag from '@assets/images/Britain-Flag.svg';

export default function Header() {
  const { lang, changeLanguage, t } = useTranslation();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Закрытие языкового меню при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.header-language') && isLangDropdownOpen) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangDropdownOpen]);

  // Закрытие мобильного меню при изменении размера
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentFlag = lang === 'en' ? BritainFlag : RussianFlag;
  const currentLabel = lang === 'en' ? 'En' : 'Ru';

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleLangDropdown = () => setIsLangDropdownOpen(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <>
      {/* Отступ под фиксированный хедер на мобильных */}
      <div className="header-spacer"></div>

      <header className={`header ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container">
          <div className="header-inner">
            {/* Логотип */}
            <div className="logo">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={Logo} alt="Логотип DevOil" />
              </Link>
            </div>

            {/* Бургер-меню (только на мобильных) */}
            <p
              className="burger-menu"
              onClick={toggleMobileMenu}
              aria-label="Меню"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </p>

            {/* Навигация и элементы (для десктопа) */}
            <nav className="header-nav">
              <a href="#catalog" className="header-nav-link" onClick={closeMobileMenu}>
                {t('header.catalog')}
              </a>
              <a href="#aboutcompany" className="header-nav-link" onClick={closeMobileMenu}>
                {t('header.about')}
              </a>
              <a href="#contacts" className="header-nav-link" onClick={closeMobileMenu}>
                {t('header.contacts')}
              </a>
            </nav>

            <div className="header-bid-lang">
              <a href="#bid" className="get-consultation" onClick={closeMobileMenu}>
                {t('header.consultation')}
              </a>

              <div className="header-language">
                <button
                  type="button"
                  className="language-toggle"
                  onClick={toggleLangDropdown}
                  aria-expanded={isLangDropdownOpen}
                >
                  <img src={currentFlag} alt={currentLabel} width="20" height="15" />
                  {currentLabel}
                </button>

                <ul className={`language-dropdown ${isLangDropdownOpen ? 'visible' : ''}`}>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        changeLanguage('ru');
                        closeMobileMenu();
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
                        closeMobileMenu();
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

        {/* Мобильное меню */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>

        <div className="burger-menu-logo">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={Logo} alt="Логотип DevOil" />
              </Link>
            </div>
        <nav className="mobile-nav">
          <a href="#catalog" className="mobile-nav-link" onClick={closeMobileMenu}>
            {t('header.catalog')}
          </a>
          <a href="#aboutcompany" className="mobile-nav-link" onClick={closeMobileMenu}>
            {t('header.about')}
          </a>
          <a href="#contacts" className="mobile-nav-link" onClick={closeMobileMenu}>
            {t('header.contacts')}
          </a>
          <a href="#bid" className="mobile-consultation" onClick={closeMobileMenu}>
            {t('header.consultation')}
          </a>

          <div className="mobile-language">
            <button
              type="button"
              className="language-toggle"
              onClick={toggleLangDropdown}
            >
              <img src={currentFlag} alt={currentLabel} width="20" height="15" />
              {currentLabel}
            </button>
            <ul className={`language-dropdown ${isLangDropdownOpen ? 'visible' : ''}`}>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage('ru');
                    closeMobileMenu();
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
                    closeMobileMenu();
                  }}
                >
                  <img src={BritainFlag} alt="En" width="20" height="15" /> En
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      </header>
    </>
  );
}