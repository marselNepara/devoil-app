import './AboutCompany.css'
import logo from '@assets/images/Devoil-Logo.svg';
export default function AboutCompany(){
  return(
    <>
      <section id='aboutcompany' className="about-company">
        <div className="container">
          <div className="about-company-inner">
            <h1 className="about-company-title">
              О компании
            </h1>
            <div className="about-company-main-block">
              <div className="about-company-main-block-inner">
                <div className="about-company-main-block-text">
                  <h2 className="about-company-main-block-title">Надёжный поставщик базовых масел высокой очистки</h2>
                  <p className="about-company-main-block-descriprion">Devoil — это компания, специализирующаяся на поставках высококачественных базовых масел, применяемых в промышленности, энергетике, косметике и фармацевтике. Мы обеспечиваем предприятия по всей России и ближнему зарубежью стабильными поставками масел, соответствующих международным стандартам качества. Наша цель — быть надёжным партнёром для производителей, предлагая гибкие условия сотрудничества, широкий ассортимент и гарантированное качество продукции.</p>
                  <div className="about-company-main-block-advantages">
                    <p className="about-company-main-block-advantage-item">Современное оборудование</p>
                    <p className="about-company-main-block-advantage-item">Опытная команда</p>
                  </div>
                  <div className="about-company-main-block-links">
                    <a href="#catalog" className="about-company-main-block-link">Наша продукция</a>
                    <a href="#bid" className="about-company-main-block-link">Оставить заявку</a>
                  </div>
                </div>
                <img src={logo} alt="" className="about-company-main-block-image" />
              </div>
            </div>
            <div className="production-process-block">
              <div className="production-process-block-inner">
                <h1 className="production-process-block-title">Производственный процесс</h1>
                  <div class="process-steps">
                <div class="step active" data-step="сырье">
                  <div class="step-icon">
                    <img src="@assets/images/сyrьe.svg" alt="Сырье" />
                  </div>
                  <h3>Сырье</h3>
                  <div class="step-underline"></div>
                </div>
                <div class="step" data-step="производство">
                  <div class="step-icon">
                    <img src="@assets/images/производство.svg" alt="Производство" />
                  </div>
                  <h3>Производство</h3>
                  <div class="step-underline"></div>
                </div>
                <div class="step" data-step="контроль">
                  <div class="step-icon">
                    <img src="@assets/images/контроль.svg" alt="Контроль" />
                  </div>
                  <h3>Контроль</h3>
                  <div class="step-underline"></div>
                </div>
                <div class="step" data-step="упаковка">
                  <div class="step-icon">
                    <img src="@assets/images/упаковка.svg" alt="Упаковка" />
                  </div>
                  <h3>Упаковка</h3>
                  <div class="step-underline"></div>
                </div>
                <div class="step" data-step="доставка">
                  <div class="step-icon">
                    <img src="@assets/images/доставка.svg" alt="Доставка" />
                  </div>
                  <h3>Доставка</h3>
                  <div class="step-underline"></div>
                </div>
              </div>
              <div class="step-content">
                <div class="step-description" data-step="сырье">
                  <h4>Сырье</h4>
                  <p>Закупка высококачественного сырья от проверенных поставщиков</p>
                </div>
                <div class="step-description" data-step="производство">
                  <h4>Производство</h4>
                  <p>Современные технологии производства без использования химических добавок</p>
                </div>
                <div class="step-description" data-step="контроль">
                  <h4>Контроль</h4>
                  <p>Многоступенчатый контроль качества на каждом этапе</p>
                </div>
                <div class="step-description" data-step="упаковка">
                  <h4>Упаковка</h4>
                  <p>Упаковка в герметичной таре различного объёма: от 5 л до 200 л</p>
                </div>
                <div class="step-description" data-step="доставка">
                  <h4>Доставка</h4>
                  <p>Быстрая и надёжная доставка по всей России и СНГ</p>
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