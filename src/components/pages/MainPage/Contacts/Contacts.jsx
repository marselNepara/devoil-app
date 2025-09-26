import './Contacts.css';
import PhoneIcon from '@assets/images/contacts-phone-icon.svg';
import MailIcon from '@assets/images/contacts-mail-icon.svg';
import { useSlideIn } from '@hooks/useSlideIn';
export default function Contacts(){

  const [titleRef, isTitleVisible] = useSlideIn();
  const [contactsRef, isContactsVisible] = useSlideIn();
  return(
    <>
      <section id='contacts' className="contacts">
        <div className="container">
          <div className="contacts-inner">
            <h1
            ref={titleRef} 
            className={`contacts-title  ${isTitleVisible ? 'visible' : ''}`}>Контактная информация</h1>
            <div ref={contactsRef} className={`contacts-items ${isContactsVisible ? 'visible' : ''}`}>
              <div className="contact-item">
                <h2 className="contact-item-title">Наши контакты</h2>
                <div className="our-contacts-items">
                  <div className="our-contacts-item">
                    <div className="our-contacts-item-inner">
                      <img src={PhoneIcon} alt="" className="our-contacts-icon" />
                      <div className="our-contacts-text">
                        <h3 className="our-contacts-title">Телефон</h3>
                        <a href="tel:+79859775678" className="our-contacts-description">+7 985 977 5678</a>
                      </div>
                    </div>
                  </div>
                  <div className="our-contacts-item">
                    <div className="our-contacts-item-inner">
                      <img src={MailIcon} alt="" className="our-contacts-icon" />
                      <div className="our-contacts-text">
                        <h3 className="our-contacts-title">Почта</h3>
                        <p className="our-contacts-description">devoil@internet.ru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <h2 className="contact-item-title">Режим работы</h2>
                  <div className="mode-items">
                    <div className="mode-item">
                      <h4 className="mode-day">Понедельник - Пятница</h4>
                      <h4 className="mode-time">09:00 - 18:00</h4>
                    </div>
                    <div className="mode-item">
                      <h4 className="mode-day">Суббота</h4>
                      <h4 className="mode-time">10:00 - 16:00</h4>
                    </div>
                    <div className="mode-item">
                      <h4 className="mode-day">Воскресенье</h4>
                      <h4 className="mode-time">10:00 - 15:00</h4>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}