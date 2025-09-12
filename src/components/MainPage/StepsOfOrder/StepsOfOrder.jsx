import "./StepsOfOrder.css"
export default function StepsOfOrder(){
  const stepsoforder = [
    {id: 1, title: 'Оставляете заявку', undertitle: 'Отправляете запрос на сайте. Укажите интересующий объём, назначение и требования к маслу.'},
    {id: 2, title: 'Получаете коммерческое предложение', undertitle: 'Менеджер связывается с вами, уточняет детали и высылает прайс, сертификаты и условия поставки.'},
    {id: 3, title: 'Согласовываем поставку', undertitle: 'После согласования резервируем товар подготавливаем полный пакет документов — УПД, паспорт качества.'},
    {id: 4, title: 'Организуем доставку', undertitle: 'Предоставляем полный пакет сопроводительных документов: УПД и паспорт качества.'}
  ];
  return(
    <>
      <section className="steps-of-order">
        <div className="container">
          <div className="steps-of-order-inner">
            <h1 className="steps-of-partnership">Этапы сотрудничества</h1>
            {stepsoforder.map((step) => 
              <div id={"step" + step.id} key={step.id} className="step-item">
                <div className="step-item-number">{step.id}</div>
                <div className="step-item-text">
                  <div className="step-item-title">{step.title}</div>
                  <div className="step-item-undertitle">{step.undertitle}</div>
                </div>
              </div>
            )}
          </div>  
        </div>
      </section>
    </>
  );
}