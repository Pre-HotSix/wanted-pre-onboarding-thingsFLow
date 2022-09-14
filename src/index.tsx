import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IssuesStore from './store/IssuesStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IssuesStore>
      <App />
    </IssuesStore>
  </React.StrictMode>
);
