import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import Vitrine from './pages/vitrine';
import Contato from './pages/contato';
import Login from './pages/Login';
import Cadastro from './pages/cadastro';
import Visualizacao from './pages/visualização';
import EsqueciSenha from './pages/esqueceuSenha';
import FuncaoAdm from './pages/funcaoAdm';
import PoliticaPrivacidade from './pages/privacidade';
import TermosDeUso from './pages/termosUso';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VerificarItens from './pages/verificarItens';
import EditarItem from './pages/EditarItem';


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
        <Route path="/esqueceu_senha" element={<EsqueciSenha />} />
        <Route path="/visualizacao" element={<Visualizacao/>} />
        <Route path="/funcao_admin" element={<FuncaoAdm />} />
        <Route path="/editar_item" element={<EditarItem />} />  
        <Route path="/verificacao" element={<VerificarItens />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos_de_uso" element={<TermosDeUso />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

