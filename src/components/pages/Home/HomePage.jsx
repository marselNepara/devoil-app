import Banner from '@components/pages/Home/Banner/Banner';
import StepsOfOrder from '@components/pages/Home/StepsOfOrder/StepsOfOrder';
import CatalogOfProducts from '@components/pages/Home/CatalogOfProducts/CatalogOfProducts';
import Bid from '@components/pages/Home/Bid/Bid';
import AboutCompany from '@components/pages/Home/AboutCompany/AboutCompany';
import Contacts from '@components/pages/Home/Contacts/Contacts';
import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function HomePage() {
  const { t, lang } = useTranslation();
  useEffect(() => {
      document.title = t('page-titles.main_page_title') || 'Политика конфиденциальности';
    }, [t]);
  return (
    <>
      <Banner />
      <StepsOfOrder />
      <CatalogOfProducts />
      <Bid />
      <AboutCompany />
      <Contacts />
    </>
  );
}