import './Banner.css'
export default function Banner(){
  return(
    <>
      <section className="banner">
        <div className="container">
          <div className="banner-inner">
            <div className="bannner-card">
              <h1 className="banner-title">Масла высокой степени очистки</h1>
              <p className="banner-undertitle">
Высокочистое, очищенное, соответствует всем нормам и стандартам качества.
              </p>
              <a href='#contacts' className="banner-button">Связаться с нами</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}