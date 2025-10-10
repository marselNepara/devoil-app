// Header.jsx
import "./Header.css";
import Logo from '@assets/images/Header-Logo.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from '@hooks/useTranslation';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // ← добавлены useNavigate и useLocation
import LanguageSwitcher from '@hooks/LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation(); // ← текущий путь
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Обработчик клика по пункту меню
  const handleScrollTo = (sectionId) => {
    closeMobileMenu();

    if (location.pathname === '/') {
      // Уже на главной — скроллим
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      // Не на главной — переходим и передаём sectionId
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      <div className="header-spacer"></div>

      <header className={`header ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={Logo} alt="Логотип DevOil" />
              </Link>
            </div>

            <p  
              className="burger-menu"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-label="Меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </p>

            {/* Десктоп */}
            <nav className="header-nav">
              <p 
                className="header-nav-link"
                onClick={() => handleScrollTo('catalog')}
              >
                {t('header.catalog')}
              </p>
              <p
                className="header-nav-link"
                onClick={() => handleScrollTo('aboutcompany')}
              >
                {t('header.about')}
              </p>
              <p
                className="header-nav-link"
                onClick={() => handleScrollTo('contacts')}
              >
                {t('header.contacts')}
              </p>
            </nav>

            <div className="header-bid-lang">
              <button 
                className="get-consultation"
                onClick={() => handleScrollTo('bid')}
              >
                {t('header.consultation')}
              </button>
              <div className="desktop-header-language">
                <LanguageSwitcher />
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
            <p 
              className="mobile-nav-link"
              onClick={() => handleScrollTo('catalog')}
            >
              {t('header.catalog')}
            </p>
            <p 
              className="mobile-nav-link"
              onClick={() => handleScrollTo('aboutcompany')}
            >
              {t('header.about')}
            </p>
            <p 
              className="mobile-nav-link"
              onClick={() => handleScrollTo('contacts')}
            >
              {t('header.contacts')}
            </p>
            <button 
              className="mobile-consultation"
              onClick={() => handleScrollTo('bid')}
            >
              {t('header.consultation')}
            </button>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
    </>
  );
} 