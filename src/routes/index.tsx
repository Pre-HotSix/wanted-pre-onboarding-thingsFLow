import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/commons/layout';
import DetailPage from '../pages/DetailPage/DetailPage';
import MainPage from '../pages/MainPage/MainPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
