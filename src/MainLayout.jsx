import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { Outlet } from 'react-router-dom'; // ← важно!
import './index.css';
import CookieConsent from './components/CookieConsent/CookieConsent';
import ScrollToTop from '@hooks/ScrollToTop';

export default function MainLayout() {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}