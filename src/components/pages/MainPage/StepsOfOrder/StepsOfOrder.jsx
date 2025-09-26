import "./StepsOfOrder.css";
import { useSlideIn } from "@hooks/useSlideIn";

export default function StepsOfOrder() {
  const stepsoforder = [
    { id: 1, title: 'Оставляете заявку', undertitle: 'Отправляете запрос на сайте. Укажите интересующий объём, назначение и требования к маслу.' },
    { id: 2, title: 'Получаете коммерческое предложение', undertitle: 'Менеджер связывается с вами, уточняет детали и высылает прайс, сертификаты и условия поставки.' },
    { id: 3, title: 'Согласовываем поставку', undertitle: 'После согласования резервируем товар подготавливаем полный пакет документов — УПД, паспорт качества.' },
    { id: 4, title: 'Организуем доставку', undertitle: 'Предоставляем полный пакет сопроводительных документов: УПД и паспорт качества.' }
  ];

  // По одному ref на контейнер текста
  const textContainerRefs = stepsoforder.map(() => useSlideIn({ threshold: 0.1 }));
  // По одному ref на номер
  const numberRefs = stepsoforder.map(() => useSlideIn({ threshold: 0.1 }));

  return (
    <>
      <section className="steps-of-order">
        <div className="container">
          <div className="steps-of-order-inner">
            <h1 className="steps-of-partnership">Этапы сотрудничества</h1>
            {stepsoforder.map((step, index) => {
              const [textRef, isTextVisible] = textContainerRefs[index];
              const [numberRef, isNumberVisible] = numberRefs[index];

              // Направление для текста: нечётный — справа, чётный — слева
              const textDirection = index % 2 === 0 ? 'slide-right-steps' : 'slide-left-steps';
              // Направление для номера — противоположное
              const numberDirection = index % 2 === 0 ? 'slide-left-steps' : 'slide-right-steps';

              return (
                <div key={step.id} id={`step${step.id}`} className="step-item">
                  {/* Номер — движется в обратную сторону */}
                  <div
                    ref={numberRef}
                    className={`step-item-number-container ${numberDirection} ${isNumberVisible ? 'visible' : ''}`}
                  >
                    <div className="step-item-number">{step.id}</div>
                  </div>

                  {/* Текст — как раньше */}
                  <div
                    ref={textRef}
                    className={`step-item-text-container ${textDirection} ${isTextVisible ? 'visible' : ''}`}
                  >
                    <div className="step-item-text">
                      <div className="step-item-title">{step.title}</div>
                      <div className="step-item-undertitle">{step.undertitle}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}