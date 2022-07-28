import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root/Root';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Combate from './Combate/Combate';
import ListaPokemones from './ListarPokemon/ListarPokemon';
import Pokemon from './Pokemon/Pokemon';
import Historial from './Historial/Historial';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route path='/combate' element={<Combate />}></Route>
          <Route path='/historial' element={<Historial/>}></Route>
          <Route path='/pokemon' element={<Pokemon />}></Route>
          <Route path='/pokedex' element={<ListaPokemones />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
