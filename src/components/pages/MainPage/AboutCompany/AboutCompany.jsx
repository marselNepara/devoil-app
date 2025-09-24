import './AboutCompany.css';
import { useState } from 'react';
import logo from '@assets/images/Devoil-Logo.svg';
import BarrelImg from '@assets/images/Step-barrel.png';
import GearImg from '@assets/images/Step-gear.png';
import MicroscopeImg from '@assets/images/Step-microscope.png';
import BoxImg from '@assets/images/Step-box.png';
import GazeleImg from '@assets/images/Step-gazele.png';

export default function AboutCompany() {
  const [activeStep, setActiveStep] = useState('Сырье');

  const descriptions = {
    Сырье: 'Закупка высококачественного сырья от проверенных поставщиков',
    Производство: 'Современные технологии производства без использования химических добавок',
    Контроль: 'Многоступенчатый контроль качества на каждом этапе',
    Упаковка: 'Упаковка в герметичной таре различного объёма',
    Доставка: 'Быстрая и надёжная доставка по всей России'
  };

  return (
    <>
      <section id="aboutcompany" className="about-company">
        <div className="container">
          <div className="about-company-inner">
            <h1 className="about-company-title">О компании</h1>

            <div className="about-company-main-block">
              <div className="about-company-main-block-inner">
                <div className="about-company-main-block-text">
                  <h2 className="about-company-main-block-title">
                    Надёжный поставщик базовых масел высокой очистки
                  </h2>
                  <p className="about-company-main-block-descriprion">
                    Devoil — это компания, специализирующаяся на поставках высококачественных базовых масел, применяемых в промышленности, энергетике, косметике и фармацевтике. Мы обеспечиваем предприятия по всей России и ближнему зарубежью стабильными поставками масел, соответствующих международным стандартам качества. Наша цель — быть надёжным партнёром для производителей, предлагая гибкие условия сотрудничества, широкий ассортимент и гарантированное качество продукции.
                  </p>
                  <div className="about-company-main-block-advantages">
                    <p className="about-company-main-block-advantage-item">Современное оборудование</p>
                    <p className="about-company-main-block-advantage-item">Опытная команда</p>
                  </div>
                  <div className="about-company-main-block-links">
                    <a href="#catalog" className="about-company-main-block-link">Наша продукция</a>
                    <a href="#bid" className="about-company-main-block-link">Оставить заявку</a>
                  </div>
                </div>
                <img src={logo} alt="Логотип Devoil" className="about-company-main-block-image" />
              </div>
            </div>

            <div className="production-process-block">
              <div className="production-process-block-inner">
                <h1 className="production-process-block-title">Производственный процесс</h1>

                <div className="process-steps">
                  <div
                    className={`step ${activeStep === 'Сырье' ? 'step-active' : ''}`}
                    onClick={() => setActiveStep('Сырье')}
                  >
                    <div className="step-icon">
                      <img src={BarrelImg} alt="Сырье" />
                    </div>
                    <h3 className="step-name">Сырье</h3>
                    <div className="step-underline"></div>
                  </div>

                  <div
                    className={`step ${activeStep === 'Производство' ? 'step-active' : ''}`}
                    onClick={() => setActiveStep('Производство')}
                  >
                    <div className="step-icon">
                      <img src={GearImg} alt="Производство" />
                    </div>
                    <h3 className="step-name">Производство</h3>
                    <div className="step-underline"></div>
                  </div>
                  <div
                    className={`step ${activeStep === 'Контроль' ? 'step-active' : ''}`}
                    onClick={() => setActiveStep('Контроль')}
                  >
                    <div className="step-icon">
                      <img src={MicroscopeImg} alt="Контроль" />
                    </div>
                    <h3 className="step-name">Контроль</h3>
                    <div className="step-underline"></div>
                  </div>
                  <div
                    className={`step ${activeStep === 'Упаковка' ? 'step-active' : ''}`}
                    onClick={() => setActiveStep('Упаковка')}
                  >
                    <div className="step-icon">
                      <img src={BoxImg} alt="Упаковка" />
                    </div>
                    <h3 className="step-name">Упаковка</h3>
                    <div className="step-underline"></div>
                  </div>
                  <div
                    className={`step ${activeStep === 'Доставка' ? 'step-active' : ''}`}
                    onClick={() => setActiveStep('Доставка')}
                  >
                    <div className="step-icon">
                      <img src={GazeleImg} alt="Доставка" />
                    </div>
                    <h3 className="step-name">Доставка</h3>
                    <div className="step-underline"></div>
                  </div>
                </div>
                <div className="step-content">
                  <div className="step-description">
                    <h3>{activeStep}</h3>
                    <p>{descriptions[activeStep]}</p> 
                  </div>
                </div>
              </div>
            </div>
            <div className="collaborate-block">
                <div className="collaborate-inner">
                  <div className="collaborate-text">
                    <h1 className="collaborate-title">Готовы к сотрудничеству?</h1>
                    <p className="collaborate-description">Станьте нашим партнером и получите доступ к продукции по выгодным ценам</p>
                  </div>
                  <a href="#contacts" className="link-contact-us">Связаться с нами</a>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}