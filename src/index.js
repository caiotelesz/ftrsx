import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './home';
import Vitrine from './vitrine';
import Contato from './contato';
import Login from './Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vitrine" element={<Vitrine />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

