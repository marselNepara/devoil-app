import './Catalog.css';
import { useState } from 'react';

export default function Catalog() {
  const items = [
    {
      id: 1,
      title: "Вазелиновое масло 30",
      description: "Масло средней вязкости для медицинских и косметических целей",
      scope_of_supply: 200,
      clean: 99.7,
      viscosity_bot: 28,
      viscosity_top: 35,
      density: 0.84
    },
    {
      id: 2,
      title: "Вазелиновое масло 15",
      description: "Лёгкое маловязкое масло для точных механизмов и электроники",
      scope_of_supply: 200,
      clean: 99.8,
      viscosity_bot: 13,
      viscosity_top: 17,
      density: 0.82
    },
    {
      id: 3,
      title: "Вазелиновое масло 68",
      description: "Высоковязкое масло для тяжёлых промышленных механизмов и гидравлики",
      scope_of_supply: 200,
      clean: 99.6,
      viscosity_bot: 63,
      viscosity_top: 73,
      density: 0.87
    },
    {
      id: 4,
      title: "Вазелиновое масло 40",
      description: "Универсальное масло для смазки станков и подшипников",
      scope_of_supply: 200,
      clean: 99.7,
      viscosity_bot: 37,
      viscosity_top: 43,
      density: 0.85
    },
    {
      id: 5,
      title: "Вазелиновое масло 20",
      description: "Маловязкое масло для консервации и лёгких узлов трения",
      scope_of_supply: 200,
      clean: 99.75,
      viscosity_bot: 18,
      viscosity_top: 22,
      density: 0.83
    }
  ];

  // Состояние: сколько товаров показывать
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 2);

  return (
    <>
      <section className="catalog" id='catalog'>
        <div className="container">
          <div className="catalog-inner">
            <h1 className="catalog-title">Каталог</h1>

            <div className="catalog-items">
              {visibleItems.map((item) => (
                <div className="catalog-item" key={item.id}>
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-descriprion">{item.description}</p>

                  <div className="item-content">
                    <div className="item-content-specs">
                      <h2 className="item-content-specs-title">Технические характеристики</h2>
                      <div className="specs-items">
                        <div className="specs-item-row">
                          <div className="specs-item">
                            <p className="specs-item-title">Объем поставки</p>
                            <p className="specs-item-value">{item.scope_of_supply}л</p>
                          </div>
                          <div className="specs-item">
                            <p className="specs-item-title">Чистота</p>
                            <p className="specs-item-value">{item.clean}%</p>
                          </div>
                        </div>
                        <div className="specs-item-row">
                          <div className="specs-item">
                            <p className="specs-item-title">Вязкость</p>
                            <p className="specs-item-value">
                              {item.viscosity_bot}-{item.viscosity_top} сСт
                            </p>
                          </div>
                          <div className="specs-item">
                            <p className="specs-item-title">Плотность</p>
                            <p className="specs-item-value">{item.density} г/см³</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item-content-application">
                      <h2 className="item-content-application-title">Применение и сертификаты</h2>
                      <div className="application-content">
                        <div className="application-rows">
                          <div className="application-row">
                            <h3 className="application-title">Области применения:</h3>
                            <div className="application-items">
                              <p className="application-item">Медицинские приборы</p>
                              <p className="application-item">Фармацевтика</p>
                              <p className="application-item">Косметика</p>
                            </div>
                          </div>
                          <div className="certificates-row">
                            <h3 className="certificates-title">Сертификаты и стандарты:</h3>
                            <div className="certificates-items">
                              <p className="certificate-item">ГОСТ Р 53799-2010</p>
                              <p className="certificate-item">ISO 22716</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="buttons-group">
                    <button className="btn-primary">Оставить заявку</button>
                    <button className="btn-secondary">Техпаспорт</button>
                    <button className="btn-secondary">Сертификаты</button>
                  </div>
                </div>
              ))}
            </div>

            {}
            <div className="catalog-actions">
              <button
                className="btn-show-more"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Скрыть' : 'Показать больше'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}