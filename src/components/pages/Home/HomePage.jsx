// HomePage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ← добавлен
import { useTranslation } from '@/hooks/useTranslation';
import Banner from '@components/pages/Home/Banner/Banner';
import StepsOfOrder from '@components/pages/Home/StepsOfOrder/StepsOfOrder';
import CatalogOfProducts from '@components/pages/Home/CatalogOfProducts/CatalogOfProducts';
import Bid from '@components/pages/Home/Bid/Bid';
import AboutCompany from '@components/pages/Home/AboutCompany/AboutCompany';
import Contacts from '@components/pages/Home/Contacts/Contacts';

export default function HomePage() {
  const { t } = useTranslation();
  const location = useLocation(); // ← получаем состояние навигации

  // Устанавливаем title
  useEffect(() => {
    document.title = t('page-titles.main_page_title') || 'DevOil - Главная страница';
  }, [t]);

  // Прокрутка к блоку после загрузки
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, [location.state]); // ← зависимость от location.state

  return (
    <>
      <Banner />
      <StepsOfOrder />
      <CatalogOfProducts />
      <Bid />
      <AboutCompany/>
      <Contacts/>
    </>
  );
}