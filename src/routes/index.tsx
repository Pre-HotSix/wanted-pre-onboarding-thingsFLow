import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IssueDetail, Home } from '../pages';
import { IssuesProvider } from '../libs/context/IssuesContext';

export default function Router() {
  return (
    <BrowserRouter>
      <IssuesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<IssueDetail />} />
        </Routes>
      </IssuesProvider>
    </BrowserRouter>
  );
}
