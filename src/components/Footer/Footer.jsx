import './Footer.css';
import Logo from '@assets/images/Header-Logo.svg';
import PhoneImg from '@assets/images/footer-phone.svg';
import MailImg from '@assets/images/footer-mail.svg';
import WhatsAppIcon from '@assets/images/whatsapp-icon.png';
import TelegramIcon from '@assets/images/telegram-icon.png';
export default function Footer(){
  return(
    <>
      <footer className="footer">
        <div className="footer-all">
          <div className="container">
            <div className="footer-inner">
              <img src={Logo} alt="" className="logo" />
              <div className="footer-column">
                <h2 className="footer-column-title">Каталог</h2>
                <a href="" className="footer-column-link">Белые масла</a>
                <a href="" className="footer-column-link">Вазелиновые масла</a>
                <a href="" className="footer-column-link">Редукторные масла</a>
              </div>
              <div className="footer-column">
                <h2 className="footer-column-title">Компания</h2>
                <a href="" className="footer-column-link">О компании</a>
                <a href="" className="footer-column-link">Как мы работаем</a>
              </div>
              <div className="footer-column">
                <h2 className="footer-column-title">Контакты</h2>
                <div className="footer-contacts-item">
                  <img src={PhoneImg} alt="" />
                  <a href="tel:+79859775678">+7 985 977 5678</a>
                </div>
                <div className="footer-contacts-item">
                  <img src={MailImg} alt="" />
                  <p>devoil@internet.ru</p>
                </div>
                <div className="footer-contacts-item">
                  <a href="https://t.me/devOil_org" className="footer-telegram-link"><img src={TelegramIcon} alt="" /></a>
                  <a href="https://wa.me/79859775678" className="footer-whatsapp-link"><img src={WhatsAppIcon} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="container">
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} DevOil. Все права защищены.</p>
              <a href="policy">Политика конфиденциальности</a>
              <div className="footer-docs">
                <p>ИНН: 7701234567</p>
                <p>ОГРН: 1027700123456</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}