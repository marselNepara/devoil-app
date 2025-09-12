import './Banner.css'
export default function Banner(){
  return(
    <>
      <section className="banner">
        <div className="container">
          <div className="banner-inner">
            <div className="bannner-card">
              <h1 className="banner-title">Вазелиновое масло для промышленных предприятий</h1>
              <p className="banner-undertitle">
Высокочистое, очищенное, соответствует всем нормам и стандартам качества.
              </p>
              <button className="banner-button">Для промышленности</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}