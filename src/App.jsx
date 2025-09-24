import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/pages/MainPage/Banner/Banner';
import StepsOfOrder from '@components/pages/MainPage/StepsOfOrder/StepsOfOrder';
import CatalogOfProducts from '@components/pages/MainPage/CatalogOfProducts/CatalogOfProducts';
import Bid from '@components/pages/MainPage/Bid/Bid';
import AboutCompany from '@components/pages/MainPage/AboutCompany/AboutCompany';
import Contacts from './components/pages/MainPage/Contacts/Contacts';
export default function App() {
  return (
    <>
      <Header/>
      <Banner/> 
      <StepsOfOrder/>
      <CatalogOfProducts/>
      <Bid/>
      <AboutCompany/>
      <Contacts/>
      <Footer/>
    </>
  );
}
