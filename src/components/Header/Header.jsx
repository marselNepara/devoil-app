import "./Header.css";
import Logo from '@assets/images/Header-Logo.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from '@hooks/useTranslation';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'; // ← путь может отличаться

export default function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <>
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

            {/* Бургер */}
            <button
              className="burger-menu"
              onClick={toggleMobileMenu}
              aria-label="Меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Десктоп */}
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
              {/* Язык — ТОЛЬКО НА ДЕСКТОПЕ */}
              <div className="desktop-header-language">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Мобильное меню — БЕЗ языка */}
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
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
    </>
  );
}