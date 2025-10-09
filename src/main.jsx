import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Layout
import MainLayout from './MainLayout';
// Pages
import HomePage from '@components/pages/Home/HomePage';
import OilCategoryPage from '@components/pages/OilCategoryPage/OilCategoryPage';
import Policy from './components/pages/Policy/Policy';

const router = createBrowserRouter([
  {
    element: <MainLayout />, // общий layout для всех основных страниц
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/catalog/:categorySlug', element: <OilCategoryPage /> },
      { path: '/policy', element: <Policy /> },
    ],
  },
  // Страницы без layout'а (если понадобятся) — например, лендинг без хедера
  // { path: '/special', element: <SpecialPage /> },
  // 404 — лучше вынести отдельно, без layout'а или с ним — как хочешь
  // { path: '*', element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);