import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300&display=swap');
    </style>
    <div className='iblue'>
    <p className='projetoFinal gradiente'>Projeto Final</p>
    </div>
    <div className='iblue2'>
    <p className='iConsulting gradiente'>Iblue Consulting</p>
    </div>
    <div className='responsivo'>
    <p className='mobile gradiente'>Projeto Final - iblue Consulting</p>
    </div>
    <App />
  </React.StrictMode>
  
);