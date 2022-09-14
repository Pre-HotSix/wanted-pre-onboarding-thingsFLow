import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/commons/layout';
import { MainPage, DetailPage, ErrorPage } from '../pages/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
