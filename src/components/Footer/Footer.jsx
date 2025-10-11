// Footer.jsx
import './Footer.css';
import Logo from '@assets/images/Header-Logo.svg';
import PhoneImg from '@assets/images/footer-phone.svg';
import MailImg from '@assets/images/footer-mail.svg';
import WhatsAppIcon from '@assets/images/whatsapp-icon.png';
import TelegramIcon from '@assets/images/telegram-icon.png';
import { useTranslation } from '@hooks/useTranslation';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Функция прокрутки к секции
  const handleScrollTo = (sectionId) => {
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
      // Не на главной — переходим и передаём цель
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-all">
        <div className="container">
          <div className="footer-inner">
            <img src={Logo} alt={t('footer.logo-alt')} className="logo" />

            <div className="footer-column">
              <h2 className="footer-column-title">{t('footer.catalog.title')}</h2>
              <Link to="/catalog/white-oils" className="footer-column-link">
                {t('footer.catalog.items.white-oils')}
              </Link>
              <Link to="/catalog/vaseline-oils" className="footer-column-link">
                {t('footer.catalog.items.vaseline-oils')}
              </Link>
              <Link to="/catalog/reducer-oils" className="footer-column-link">
                {t('footer.catalog.items.gear-oils')}
              </Link>
            </div>

            <div className="footer-column">
              <h2 className="footer-column-title">{t('footer.company.title')}</h2>
              <p
                className="footer-column-link as-link"
                onClick={() => handleScrollTo('aboutcompany')}
              >
                {t('footer.company.items.about')}
              </p>
              <p
                className="footer-column-link as-link"
                onClick={() => handleScrollTo('aboutcompany')}
              >
                {t('footer.company.items.how-we-work')}
              </p>
            </div>

            <div className="footer-column">
              <h2 className="footer-column-title">{t('footer.contacts.title')}</h2>
              <div className="footer-contacts-item">
                <img src={PhoneImg} alt={t('footer.contacts.phone-alt')} />
                <a href="tel:+79859775678">+7 985 977 5678</a>
              </div>
              <div className="footer-contacts-item">
                <img src={PhoneImg} alt={t('footer.contacts.phone-alt')} />
                <a href="tel:+79859775678">+7 985 130 8649</a>
              </div>
              <div className="footer-contacts-item">
                <img src={MailImg} alt={t('footer.contacts.email-alt')} />
                <p>devoil@internet.ru</p>
              </div>
              <div className="footer-contacts-item social-links">
                <a
                  href="https://t.me/devOil_org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-telegram-link"
                  aria-label={t('footer.contacts.telegram-alt')}
                >
                  <img src={TelegramIcon} alt="" />
                </a>
                <a
                  href="https://wa.me/79859775678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-whatsapp-link"
                  aria-label={t('footer.contacts.whatsapp-alt')}
                >
                  <img src={WhatsAppIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="container">
          <div className="footer-bottom">
            <p>
              &copy; {currentYear} DevOil. {t('footer.copyright')}
            </p>
            <a href="/privacy-policy" 
            target='_blank' 
            className="footer-privacy-link">
              {t('footer.privacy-policy')}
            </a>
            <div className="footer-docs">
              <p>ИНН: 7701234567</p>
              <p>ОГРН: 1027700123456</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}