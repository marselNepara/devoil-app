import './AboutCompany.css';

import logo from '@assets/images/Devoil-Logo.svg';
import BarrelImg from '@assets/images/Step-barrel.png';
import GearImg from '@assets/images/Step-gear.png';
import MicroscopeImg from '@assets/images/Step-microscope.png';
import BoxImg from '@assets/images/Step-box.png';
import GazeleImg from '@assets/images/Step-gazele.png';
import { useState } from 'react';
import { useSlideIn } from '@hooks/useSlideIn';
import { useTranslation } from '@hooks/useTranslation';

export default function AboutCompany() {
  const { t } = useTranslation();

  // Используем КЛЮЧИ, а не текст!
  const [activeStep, setActiveStep] = useState('item-1');

  const [titleRef, isTitleVisible] = useSlideIn();
  const [aboutCompanyRef, isAboutCompanyVisible] = useSlideIn();
  const [productionProcessRef, isProductionProcessVisible] = useSlideIn();
  const [collaborateBlockRef, isCollaborateBlockVisible] = useSlideIn();

  // Вспомогательные функции для получения перевода шага
  const getStepTitle = (key) => t(`about-company.production-process.items.${key}.title`);
  const getStepDescription = (key) => t(`about-company.production-process.items.${key}.description`);
  const getStepImage = (key) => {
    switch (key) {
      case 'item-1': return BarrelImg;
      case 'item-2': return GearImg;
      case 'item-3': return MicroscopeImg;
      case 'item-4': return BoxImg;
      case 'item-5': return GazeleImg;
      default: return BarrelImg;
    }
  };

  return (
    <>
      <section id="aboutcompany" className="about-company">
        <div className="container">
          <div className="about-company-inner">
            <h1
              ref={titleRef}
              className={`about-company-title ${isTitleVisible ? 'visible' : ''}`}
            >
              {t('about-company.title')}
            </h1>

            <div
              ref={aboutCompanyRef}
              className={`about-company-main-block ${isAboutCompanyVisible ? 'visible' : ''}`}
            >
              <div className="about-company-main-block-inner">
                <div className="about-company-main-block-text">
                  <h2 className="about-company-main-block-title">
                    {t('about-company.about-company-block.title')}
                  </h2>
                  <p className="about-company-main-block-descriprion">
                    {t('about-company.about-company-block.description')}
                  </p>
                  <div className="about-company-main-block-advantages">
                    <p className="about-company-main-block-advantage-item">
                      {t('about-company.about-company-block.advantages.first-advantage')}
                    </p>
                    <p className="about-company-main-block-advantage-item">
                      {t('about-company.about-company-block.advantages.second-advantage')}
                    </p>
                  </div>
                  <div className="about-company-main-block-links">
                    <a href="#catalog" className="about-company-main-block-link">
                      {t('about-company.about-company-block.buttons.our-products')}
                    </a>
                    <a href="#bid" className="about-company-main-block-link">
                      {t('about-company.about-company-block.buttons.request-a-quote')}
                    </a>
                  </div>
                </div>
                <img
                  src={logo}
                  alt={t('about-company.alt.logo')}
                  className="about-company-main-block-image"
                />
              </div>
            </div>

            <div
              ref={productionProcessRef}
              className={`production-process-block ${isProductionProcessVisible ? 'visible' : ''}`}
            >
              <div className="production-process-block-inner">
                <h1 className="production-process-block-title">
                  {t('about-company.production-process.title')}
                </h1>

                <div className="process-steps">
                  {['item-1', 'item-2', 'item-3', 'item-4', 'item-5'].map((key) => (
                    <div
                      key={key}
                      className={`step ${activeStep === key ? 'step-active' : ''}`}
                      onClick={() => setActiveStep(key)}
                    >
                      <div className="step-icon">
                        <img
                          src={getStepImage(key)}
                          alt={getStepTitle(key)}
                        />
                      </div>
                      <h3 className="step-name">{getStepTitle(key)}</h3>
                      <div className="step-underline"></div>
                    </div>
                  ))}
                </div>

                <div className="step-content">
                  <div className="step-description">
                    <h3>{getStepTitle(activeStep)}</h3>
                    <p>{getStepDescription(activeStep)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={collaborateBlockRef}
              className={`collaborate-block ${isCollaborateBlockVisible ? 'visible' : ''}`}
            >
              <div className="collaborate-inner">
                <div className="collaborate-text">
                  <h1 className="collaborate-title">
                    {t('about-company.collaborate.title')}
                  </h1>
                  <p className="collaborate-description">
                    {t('about-company.collaborate.description')}
                  </p>
                </div>
                <a href="#contacts" className="link-contact-us">
                  {t('about-company.collaborate.button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}