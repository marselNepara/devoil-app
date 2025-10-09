import './OilCategoryPage.css';
import WhiteImg from "@assets/images/Canister.png";
import VaselineImg from "@assets/images/Bottle.png";
import GearImg from "@assets/images/Gear.png";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function OilCategoryPage() {
  const { categorySlug } = useParams();
  const [activeTab, setActiveTab] = useState('specs'); // specs | usage | certs

  const categories = {
    'white-oils': {
      title: 'Белые масла',
      description: 'Технические и смазочные минеральные масла высокой очистки для различных промышленных применений',
      usage: ['Техническое', 'Смазка'],
      image: WhiteImg,
      color: '#d29d19',
      gradient: 'linear-gradient(90deg, #f5e6d3 100%, #fff5f2 0%)',
      usageBg: '#f5e6d3',
      usageText: '#d29d19',
      applications: {
        cosmetic: {
          title: 'Косметическая промышленность',
          items: [
            'Кремы и лосьоны для лица и тела',
            'Помады и бальзамы для губ',
            'Солнцезащитные средства',
            'Детская косметика',
            'Массажные масла',
            'Средства для снятия макияжа',
          ],
        },
        pharmaceutical: {
          title: 'Фармацевтическая промышленность',
          items: [
            'Суппозитории',
            'Капсулы и таблетки',
            'Инъекционные препараты',
            'Офтальмологические средства',
          ],
        },
        food: {
          title: 'Пищевая промышленность',
          items: [
            'Разделительные агенты',
            'Консерванты для фруктов',
            'Покрытия для кондитерских изделий',
            'Добавки в жевательную резинку',
            'Антиспенные агенты',
          ],
        },
      },
      advantages: [
        { title: 'Высокая степень очистки', text: 'Удаление всех ароматических соединений и примесей' },
        { title: 'Химическая инертность', text: 'Не вступают в реакцию с другими веществами' },
        { title: 'Отсутствие запаха и вкуса', text: 'Идеально подходят для пищевых и косметических применений' },
        { title: 'Стабильность при хранении', text: 'Длительный срок службы без изменения свойств' },
        { title: 'Широкий диапазон вязкостей', text: 'От очень легких до густых консистенций' },
      ],
      certificates: {
        standards: [
          { title: 'FDA 21 CFR 178.3620', desc: 'Одобрено для контакта с пищевыми продуктами' },
          { title: 'USP Mineral Oil', desc: 'Соответствует фармакопее США' },
          { title: 'Ph.Eur. Paraffinum Liquidum', desc: 'Европейская фармакопея' },
        ],
        certs: [
          { title: 'ISO 9001:2015', desc: 'Система менеджмента качества' },
          { title: 'GMP Certified', desc: 'Надлежащая производственная практика' },
          { title: 'HACCP Compliant', desc: 'Анализ рисков и контрольные точки' },
        ],
      },
    },
    'vaseline-oils': {
      title: 'Вазелиновые масла',
      description: 'Высокоочищенные вазелиновые масла для косметической, медицинской и пищевой промышленности',
      usage: ['Косметика', 'Пищевая', 'Медицина'],
      image: VaselineImg,
      color: '#233446',
      gradient: 'linear-gradient(90deg, #e8edf5 100%, #fff5f2 0%)',
      usageBg: '#e8edf5',
      usageText: '#233446',
      applications: {
        cosmetic: {
          title: 'Косметическая промышленность',
          items: [
            'Кремы для чувствительной кожи',
            'Бальзамы для губ',
            'Средства для ухода за волосами',
            'Детские присыпки',
            'Защитные барьеры',
          ],
        },
        pharmaceutical: {
          title: 'Фармацевтическая промышленность',
          items: [
            'Основа для мазей и гелей',
            'Капсулы и таблетки',
            'Инъекционные растворы',
            'Офтальмологические препараты',
          ],
        },
        food: {
          title: 'Пищевая промышленность',
          items: [
            'Разделительные агенты',
            'Покрытия для кондитерских изделий',
            'Консерванты для фруктов',
            'Добавки в жевательную резинку',
          ],
        },
      },
      advantages: [
        { title: 'Гипоаллергенность', text: 'Подходит для чувствительной кожи и детей' },
        { title: 'Биосовместимость', text: 'Безопасны для медицинского применения' },
        { title: 'Стабильность', text: 'Не меняют свойства при хранении' },
        { title: 'Широкий спектр применений', text: 'От косметики до пищевой промышленности' },
      ],
      certificates: {
        standards: [
          { title: 'Ph.Eur. Paraffinum Liquidum', desc: 'Европейская фармакопея' },
          { title: 'FDA 21 CFR 178.3620', desc: 'Одобрено для контакта с пищевыми продуктами' },
          { title: 'ГОСТ Р 52287-2004', desc: 'Российский государственный стандарт' },
        ],
        certs: [
          { title: 'ISO 13485', desc: 'Система менеджмента качества для медицинских изделий' },
          { title: 'GMP Pharma', desc: 'Надлежащая производственная практика' },
          { title: 'FSSC 22000', desc: 'Система безопасности пищевых продуктов' },
        ],
      },
    },
    'reducer-oils': {
      title: 'Редукторные масла',
      description: 'Специализированные масла для редукторов, трансмиссий и тяжёлого промышленного оборудования',
      usage: ['Редукторы', 'Техническое', 'Трансмиссии'],
      image: GearImg,
      color: '#8796aa',
      gradient: 'linear-gradient(90deg, #f0f4f8 100%, #fff5f2 0%)',
      usageBg: '#f0f4f8',
      usageText: '#8796aa',
      applications: {
        cosmetic: {
          title: 'Промышленное оборудование',
          items: [
            'Редукторы и мотор-редукторы',
            'Трансмиссии строительной техники',
            'Металлургическое оборудование',
            'Энергетические установки',
            'Горнодобывающее оборудование',
          ],
        },
        pharmaceutical: {
          title: 'Тяжёлое машиностроение',
          items: [
            'Прессовые станки',
            'Крановое оборудование',
            'Транспортные конвейеры',
            'Шестерёнчатые передачи',
          ],
        },
        food: {
          title: 'Сельскохозяйственная техника',
          items: [
            'Тракторы и комбайны',
            'Оборудование для переработки зерна',
            'Силовые агрегаты',
            'Гидравлические системы',
          ],
        },
      },
      advantages: [
        { title: 'Высокая термостойкость', text: 'Работает при высоких температурах' },
        { title: 'Защита от износа', text: 'Снижает трение и продлевает срок службы оборудования' },
        { title: 'Стабильность вязкости', text: 'Не меняется при перепадах температур' },
        { title: 'Долговечность', text: 'Минимум замены, максимум эффективности' },
      ],
      certificates: {
        standards: [
          { title: 'ISO 12925-1', desc: 'Масла для промышленных редукторов' },
          { title: 'DIN 51517', desc: 'Немецкий стандарт для смазочных материалов' },
          { title: 'AGMA 9005', desc: 'Американский стандарт для зубчатых передач' },
        ],
        certs: [
          { title: 'API GL-4', desc: 'Сертифицировано для трансмиссионных систем' },
          { title: 'CE Marking', desc: 'Соответствие европейским нормам безопасности' },
          { title: 'ГОСТ Р 52287-2004', desc: 'Российский государственный стандарт' },
        ],
      },
    },
  };

  const category = categories[categorySlug];

  if (!category) {
    return (
      <section className="category-not-found">
        <div className="container">
          <div className="not-found-block">
            <h2>Категория не найдена</h2>
            <p>Проверьте URL или перейдите в каталог.</p>
          </div>
        </div>
      </section>
    );
  }

  const viscosities = [
    { value: '10', desc: 'Для лёгких нагрузок' },
    { value: '20', desc: 'Универсальное применение' },
    { value: '30', desc: 'Для средних нагрузок' },
    { value: '40', desc: 'Для тяжёлых нагрузок' },
  ];

  return (
    <section className="oil-category-page">
      <div className="container">
        {/* Заголовок категории */}
        <div className="category-header">
          <div className="category-icon" style={{ background: category.gradient }}>
            <img src={category.image} alt={category.title} />
          </div>
          <div className="category-info">
            <h1 className="category-title" style={{ color: category.color }}>
              {category.title}
            </h1>
            <p className="category-description">{category.description}</p>
            <div className="category-usage">
              {category.usage.map((item, i) => (
                <span
                  key={i}
                  className="usage-tag"
                  style={{
                    backgroundColor: category.usageBg,
                    color: category.usageText,
                    border: `1px solid ${category.usageText}`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Блок информации */}
        <div className="information">
          {/* Вкладки — с подчёркиванием в цвете категории */}
          <div className="tabs">
            <div className="tab-wrapper">
              <p
                className="tab"
                onClick={() => setActiveTab('specs')}
                style={{ color: activeTab === 'specs' ? category.color : '#888' }}
              >
                Технические характеристики
              </p>
              {activeTab === 'specs' && <div className="tab-underline" style={{ backgroundColor: category.color }}></div>}
            </div>
            <div className="tab-wrapper">
              <p
                className="tab"
                onClick={() => setActiveTab('usage')}
                style={{ color: activeTab === 'usage' ? category.color : '#888' }}
              >
                Применение
              </p>
              {activeTab === 'usage' && <div className="tab-underline" style={{ backgroundColor: category.color }}></div>}
            </div>
            <div className="tab-wrapper">
              <p
                className="tab"
                onClick={() => setActiveTab('certs')}
                style={{ color: activeTab === 'certs' ? category.color : '#888' }}
              >
                Сертификаты
              </p>
              {activeTab === 'certs' && <div className="tab-underline" style={{ backgroundColor: category.color }}></div>}
            </div>
          </div>

          {/* Контент */}
          <div className="content">
            {/* Технические характеристики */}
            {activeTab === 'specs' && (
              <>
                <h2 className="content-title">Доступные вязкости</h2>
                <div className="viscosities">
                  {viscosities.map((v, i) => (
                    <div key={i} className="viscosity" style={{ borderColor: category.color }}>
                      <h3 className="viscosity-value" style={{ color: category.color }}>
                        {v.value}
                      </h3>
                      <p className="viscosity-desc">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Применение */}
            {activeTab === 'usage' && (
              <div className="usage-content">
                <div className="applications-grid">
                  <div className="application-card" style={{ background: category.gradient }}>
                    <h3>{category.applications.cosmetic.title}</h3>
                    <ul>
                      {category.applications.cosmetic.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="application-card" style={{ background: category.gradient }}>
                    <h3>{category.applications.pharmaceutical.title}</h3>
                    <ul>
                      {category.applications.pharmaceutical.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="application-card" style={{ background: category.gradient }}>
                    <h3>{category.applications.food.title}</h3>
                    <ul>
                      {category.applications.food.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="advantages-section" style={{ background: '#f9fafb' }}>
                  <h3>Преимущества {category.title.toLowerCase()}</h3>
                  <div className="advantages-grid">
                    {category.advantages.map((adv, i) => (
                      <div key={i} className="advantage-item">
                        <h4>{adv.title}</h4>
                        <p>{adv.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Сертификаты */}
            {activeTab === 'certs' && (
              <div className="certs-content">
                <div className="certs-grid">
                  <div className="certs-column">
                    <h3>Международные стандарты</h3>
                    <ul>
                      {category.certificates.standards.map((item, i) => (
                        <li key={i}>
                          <strong>{item.title}</strong>
                          <p>{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="certs-column">
                    <h3>Сертификаты качества</h3>
                    <ul>
                      {category.certificates.certs.map((item, i) => (
                        <li key={i}>
                          <strong>{item.title}</strong>
                          <p>{item.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}