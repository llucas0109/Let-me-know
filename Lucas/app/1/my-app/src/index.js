import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RouterPag from './routes/router';
import { BrowserRouter } from 'react-router-dom';
/*Pega o elemento de id root e Nele renderiza o conteudo que pega do app.js*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <BrowserRouter>
      <RouterPag />
    </BrowserRouter>
  </React.StrictMode>
);
