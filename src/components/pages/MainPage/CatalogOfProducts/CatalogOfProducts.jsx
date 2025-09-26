import './CatalogOfProducts.css';
import { useSlideIn } from '@hooks/useSlideIn';

import CanisterImg from '@assets/images/Canister.png';
import GearImg from '@assets/images/Gear.png';
import BottleImg from '@assets/images/Bottle.png';

export default function CatalogOfProducts() {
  // Хуки для анимации
  const [titleRef, isTitleVisible] = useSlideIn();
  const [leftRef, isLeftVisible] = useSlideIn();
  const [centerRef, isCenterVisible] = useSlideIn();
  const [rightRef, isRightVisible] = useSlideIn();

  return (
    <>
      <section id="catalog" className="catalog-of-products">
        <div className="container">
          <div className="catalog-of-products-inner">
            {/* Заголовок: слева направо */}
            <h1
              ref={titleRef}
              className={`catalog-of-products-title ${isTitleVisible ? 'visible' : ''}`}
            >
              Каталог продукции
            </h1>

            <div className="catalog-of-products-items">
              {/* Белые масла — левый блок */}
              <div
                ref={leftRef}
                 className={`catalog-of-products-item slide-left-catalog ${isLeftVisible ? 'visible' : ''}`}
              >
                <div className="item-image item-image-1">
                  <p className="item-segment item-segment-1">Стандарт</p>
                  <img src={CanisterImg} alt="Белые масла" />
                </div>
                <h2 className="item-title">Белые масла</h2>
                <p className="item-description">
                  Высокоочищенные минеральные масла для косметической, фармацевтической и пищевой промышленности
                </p>
                <div className="item-usage item-usage-1">
                  <p className="usage-item usage-item-1">Косметика</p>
                  <p className="usage-item usage-item-1">Фармацевтика</p>
                  <p className="usage-item usage-item-1">Пищевая</p>
                </div>
                <a href="" className="item-button-more item-button-more-1">Подробнее</a>
              </div>

              {/* Вазелиновые масла — центральный (появляется первым) */}
              <div
                ref={centerRef}
                className={`catalog-of-products-item center-item-catalog ${isCenterVisible ? 'visible' : ''}`}
              >
                <div className="item-image item-image-2">
                  <p className="item-segment item-segment-2">Премиум</p>
                  <img src={BottleImg} alt="Вазелиновые масла" />
                </div>
                <h2 className="item-title">Вазелиновые масла</h2>
                <p className="item-description">
                  Медицинские и технические вазелиновые масла высокой очистки для различных промышленных применений.
                </p>
                <div className="item-usage item-usage-2">
                  <p className="usage-item usage-item-2">Медицина</p>
                  <p className="usage-item usage-item-2">Техническое</p>
                  <p className="usage-item usage-item-2">Смазка</p>
                </div>
                <a href="" className="item-button-more item-button-more-2">Подробнее</a>
              </div>

              {/* Редукторные масла — правый блок */}
              <div
                ref={rightRef}
              className={`catalog-of-products-item slide-right-catalog ${isRightVisible ? 'visible' : ''}`}
              >
                <div className="item-image item-image-3">
                  <p className="item-segment item-segment-3">Промышленное</p>
                  <img src={GearImg} alt="Редукторные масла" />
                </div>
                <h2 className="item-title">Редукторные масла</h2>
                <p className="item-description">
                  Специализированные масла для редукторов, трансмиссий и тяжёлого промышленного оборудования — надёжные, долговечные.
                </p>
                <div className="item-usage item-usage-3">
                  <p className="usage-item usage-item-3">Редукторы</p>
                  <p className="usage-item usage-item-3">Трансмиссии</p>
                  <p className="usage-item usage-item-3">Индустрия</p>
                </div>
                <a href="" className="item-button-more item-button-more-3">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}