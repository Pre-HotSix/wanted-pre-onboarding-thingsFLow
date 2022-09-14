import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage, Layout } from '../components/index';
import { HomePage, DetailPage } from '../pages/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
