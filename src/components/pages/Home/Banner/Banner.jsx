import './Banner.css'
import { useTranslation } from '@hooks/useTranslation';
export default function Banner(){
  const { t } = useTranslation();
  return(
    <>
      <section className="banner">
        <div className="container"> 
          <div className="banner-inner">
            <div className="bannner-card">
              <h1 className="banner-title">{t('banner.title')}</h1>
              <p className="banner-undertitle">{t('banner.undertitle')}</p>
              <a href='#contacts' className="banner-button">{t('banner.button')}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}