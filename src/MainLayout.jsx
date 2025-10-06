import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { Outlet } from 'react-router-dom'; // ← важно!
import './index.css';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}