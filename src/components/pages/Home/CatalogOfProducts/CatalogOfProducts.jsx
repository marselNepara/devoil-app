import './CatalogOfProducts.css';
import { useSlideIn } from '@hooks/useSlideIn';

import CanisterImg from '@assets/images/Canister.png';
import GearImg from '@assets/images/Gear.png';
import BottleImg from '@assets/images/Bottle.png';
import { useTranslation } from '@hooks/useTranslation';
import { NavLink } from 'react-router-dom';
export default function CatalogOfProducts() {
  // Хуки для анимации
  const [titleRef, isTitleVisible] = useSlideIn();
  const [leftRef, isLeftVisible] = useSlideIn();
  const [centerRef, isCenterVisible] = useSlideIn();
  const [rightRef, isRightVisible] = useSlideIn();
  const { t } = useTranslation();
  return (
    <>
      <section id="catalog" className="catalog-of-products">
        <div className="container">
          <div className="catalog-of-products-inner">
            <h1
              ref={titleRef}
              className={`catalog-of-products-title ${isTitleVisible ? 'visible' : ''}`}
            >
              {t('catalog.title')}
            </h1>

            <div className="catalog-of-products-items">
              {/* Белые масла — левый блок */}
              <div
                ref={leftRef}
                className={`catalog-of-products-item slide-left-catalog ${isLeftVisible ? 'visible' : ''}`}
              >
                <div className="item-image item-image-1">
                  <p className="item-segment item-segment-1">{t('catalog.item-1-segment')}</p>
                  <img src={CanisterImg} alt="Белые масла" />
                </div>
                <h2 className="item-title">{t('catalog.item-1-title')}</h2>
                <p className="item-description">
                  {t('catalog.item-1-description')}
                </p>
                <div className="item-usage item-usage-1">
                  <p className="usage-item usage-item-1">{t('catalog.item-1-usage-item-1')}</p>
                  <p className="usage-item usage-item-1">{t('catalog.item-1-usage-item-2')}</p>
                </div>
                <Link to="catalog/white-oils" className="item-button-more item-button-more-1">{t('catalog.btn-more')}</Link>
              </div>
              <div
                ref={centerRef}
                className={`catalog-of-products-item center-item-catalog ${isCenterVisible ? 'visible' : ''}`}>
                <div className="item-image item-image-2">
                  <p className="item-segment item-segment-2">{t('catalog.item-2-segment')}</p>
                  <img src={BottleImg} alt="Вазелиновые масла" />
                </div>
                <h2 className="item-title">{t('catalog.item-2-title')}</h2>
                <p className="item-description">
                 {t('catalog.item-2-description')}
                </p>
                <div className="item-usage item-usage-2">
                  <p className="usage-item usage-item-2">{t('catalog.item-2-usage-item-1')}</p>
                  <p className="usage-item usage-item-2">{t('catalog.item-2-usage-item-2')}</p>
                  <p className="usage-item usage-item-2">{t('catalog.item-2-usage-item-3')}</p>
                </div>
                <Link to="catalog/vaseline-oils" className="item-button-more item-button-more-2">{t('catalog.btn-more')}</Link>
              </div>

              {/* Редукторные масла — правый блок */}
              <div
                ref={rightRef}
              className={`catalog-of-products-item slide-right-catalog ${isRightVisible ? 'visible' : ''}`}
              >
                <div className="item-image item-image-3">
                  <p className="item-segment item-segment-3">{t('catalog.item-3-segment')}</p>
                  <img src={GearImg} alt="Редукторные масла" />
                </div>
                <h2 className="item-title">{t('catalog.item-3-title')}</h2>
                <p className="item-description">
                  {t('catalog.item-3-description')}
                </p>
                <div className="item-usage item-usage-3">
                  <p className="usage-item usage-item-3">{t('catalog.item-3-usage-item-1')}</p>
                  <p className="usage-item usage-item-3">{t('catalog.item-3-usage-item-2')}</p>
                  <p className="usage-item usage-item-3">{t('catalog.item-3-usage-item-3')}</p>
                </div>
                <Link to="catalog/reducer-oils" className="item-button-more item-button-more-3">{t('catalog.btn-more')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}