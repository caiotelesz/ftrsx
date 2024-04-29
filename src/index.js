import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import Vitrine from './pages/vitrine';
import Contato from './pages/contato';
import Login from './pages/Login';
import Cadastro from './pages/cadastro';
import EsqueciSenha from './pages/esqueceuSenha';

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
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceuSenha" element={<EsqueciSenha />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

