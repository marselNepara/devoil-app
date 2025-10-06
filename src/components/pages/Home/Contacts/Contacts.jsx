import './Contacts.css';
import PhoneIcon from '@assets/images/contacts-phone-icon.svg';
import MailIcon from '@assets/images/contacts-mail-icon.svg';
import { useSlideIn } from '@hooks/useSlideIn';
import { useTranslation } from '@hooks/useTranslation';

export default function Contacts() {
  const { t } = useTranslation();

  const [titleRef, isTitleVisible] = useSlideIn();
  const [contactsRef, isContactsVisible] = useSlideIn();

  return (
    <>
      <section id="contacts" className="contacts">
        <div className="container">
          <div className="contacts-inner">
            <h1
              ref={titleRef}
              className={`contacts-title ${isTitleVisible ? 'visible' : ''}`}
            >
              {t('contacts.title')}
            </h1>

            <div
              ref={contactsRef}
              className={`contacts-items ${isContactsVisible ? 'visible' : ''}`}
            >
              {/* Наши контакты */}
              <div className="contact-item">
                <h2 className="contact-item-title">
                  {t('contacts.our-contacts.title')}
                </h2>
                <div className="our-contacts-items">
                  <div className="our-contacts-item">
                    <div className="our-contacts-item-inner">
                      <img
                        src={PhoneIcon}
                        alt={t('contacts.our-contacts.phone-alt')}
                        className="our-contacts-icon"
                      />
                      <div className="our-contacts-text">
                        <h3 className="our-contacts-title">
                          {t('contacts.our-contacts.phone-label')}
                        </h3>
                        <a
                          href="tel:+79859775678"
                          className="our-contacts-description"
                        >
                          +7 985 977 5678
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="our-contacts-item">
                    <div className="our-contacts-item-inner">
                      <img
                        src={MailIcon}
                        alt={t('contacts.our-contacts.email-alt')}
                        className="our-contacts-icon"
                      />
                      <div className="our-contacts-text">
                        <h3 className="our-contacts-title">
                          {t('contacts.our-contacts.email-label')}
                        </h3>
                        <p className="our-contacts-description">devoil@internet.ru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Режим работы */}
              <div className="contact-item">
                <h2 className="contact-item-title">
                  {t('contacts.working-hours.title')}
                </h2>
                <div className="mode-items">
                  <div className="mode-item">
                    <h4 className="mode-day">
                      {t('contacts.working-hours.weekdays')}
                    </h4>
                    <h4 className="mode-time">
                      {t('contacts.working-hours.weekdays-hours')}
                    </h4>
                  </div>
                  <div className="mode-item">
                    <h4 className="mode-day">
                      {t('contacts.working-hours.saturday')}
                    </h4>
                    <h4 className="mode-time">
                      {t('contacts.working-hours.saturday-hours')}
                    </h4>
                  </div>
                  <div className="mode-item">
                    <h4 className="mode-day">
                      {t('contacts.working-hours.sunday')}
                    </h4>
                    <h4 className="mode-time">
                      {t('contacts.working-hours.sunday-hours')}
                    </h4>
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