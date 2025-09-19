import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/MainPage/Banner/Banner";
import StepsOfOrder from "./components/MainPage/StepsOfOrder/StepsOfOrder";
import CatalogOfProducts from "./components/MainPage/CatalogOfProducts/CatalogOfProducts";
export default function App() {
  return (
    <>
      <Header/>
      <Banner/> 
      <StepsOfOrder/>
      <CatalogOfProducts/>
      <Footer/>
    </>
  );
}
