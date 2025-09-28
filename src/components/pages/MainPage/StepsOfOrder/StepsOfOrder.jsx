import "./StepsOfOrder.css";
import { useSlideIn } from "@hooks/useSlideIn";
import { useTranslation } from "@hooks/useTranslation";

export default function StepsOfOrder() {
  const { t } = useTranslation();

  // Сначала получаем данные из перевода
  const stepsoforder = t('steps.items');

  // Теперь создаём refs — после того, как stepsoforder определён
  const textContainerRefs = stepsoforder.map(() => useSlideIn({ threshold: 0.1 }));
  const numberRefs = stepsoforder.map(() => useSlideIn({ threshold: 0.1 }));

  return (
    <>
      <section className="steps-of-order">
        <div className="container">
          <div className="steps-of-order-inner">
            <h1 className="steps-of-partnership">{t('steps.title')}</h1>
            {stepsoforder.map((step, index) => {
              const [textRef, isTextVisible] = textContainerRefs[index];
              const [numberRef, isNumberVisible] = numberRefs[index];

              // Направление для текста: нечётный — справа, чётный — слева
              const textDirection = index % 2 === 0 ? 'slide-right-steps' : 'slide-left-steps';
              // Направление для номера — противоположное
              const numberDirection = index % 2 === 0 ? 'slide-left-steps' : 'slide-right-steps';

              return (
                <div key={index} id={`step${index + 1}`} className="step-item">
                  {/* Номер — движется в обратную сторону */}
                  <div
                    ref={numberRef}
                    className={`step-item-number-container ${numberDirection} ${isNumberVisible ? 'visible' : ''}`}
                  >
                    <div className="step-item-number">{index + 1}</div>
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