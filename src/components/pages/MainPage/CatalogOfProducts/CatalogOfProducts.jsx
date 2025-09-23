import './CatalogOfProducts.css';
import CanisterImg from '@assets/images/Canister.png';
import GearImg from '@assets/images/Gear.png';
import SpannerImg from '@assets/images/Spanner.png';
export default function CatalogOfProducts(){
  return(
    <>
      <section id='catalog' className="catalog-of-products">
        <div className="container">
          <div className="catalog-of-products-inner">
            <h1 className="catalog-of-products-title">Каталог продукции</h1>
            <div className="catalog-of-products-items">
              <div className="catalog-of-products-item">
                <div className="item-image item-image-1">
                  <p className="item-segment item-segment-1">
                    Премиум
                  </p>
                  <img src={CanisterImg} alt="" />
                </div>
                <h2 className="item-title">Белые масла</h2>
                <p className="item-description">
                  Высокоочищенные минеральные масла для косметической, фармацевтической и пищевой промышленности
                  </p>
                  <div className="item-usage item-usage-1">
                    <p className="usage-item usage-item-1">Косметика</p>
                    <p className="usage-item usage-item-1">Фармацевтика</p>
                    <p className="usage-item usage-item-1">Пищевая</p></div>
                    <a href="" className="item-button-more item-button-more-1">Подробнее</a>
                  </div>
                <div className="catalog-of-products-item">
                <div className="item-image item-image-2">
                  <p className="item-segment item-segment-2">
                    Стандарт
                  </p>
                  <img src={GearImg} alt="" />
                </div>
                <h2 className="item-title">Вазелиновые масла</h2>
                <p className="item-description">
                  Медицинские и технические вазелиновые масла высокой очистки для различных промышленных применений.
                  </p>
                  <div className="item-usage item-usage-2">
                    <p className="usage-item usage-item-2">Медицина</p>
                    <p className="usage-item usage-item-2">Техническое</p>
                    <p className="usage-item usage-item-2">Смазка</p></div>
                    <a href="" className="item-button-more item-button-more-2">Подробнее</a>
                    </div>
              <div className="catalog-of-products-item">
                <div className="item-image item-image-3">
                <p className="item-segment item-segment-3">
                  Промышленное
                </p>
                <img src={SpannerImg} alt="" />
                </div>
                <h2 className="item-title">Редукторные масла</h2>
                <p className="item-description">
                  Специализированные масла для редукторов, трансмиссий и тяжёлого промышленного оборудования — надёжные, долговечные.
                  </p>
                  <div className="item-usage item-usage-3">
                    <p className="usage-item usage-item-3">Редукторы</p>
                    <p className="usage-item usage-item-3">Трансмиссии</p>
                    <p className="usage-item usage-item-3">Индустрия</p></div>
                    <a href="" className="item-button-more item-button-more-3">Подробнее</a>
                    </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}