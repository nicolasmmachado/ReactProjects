import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AboutBonieky } from "./pages/AboutBonieky";
import { AboutPedro } from "./pages/AboutPedro";
import { Error404 } from './pages/Error404';

function App() {
  return (
    <div>
      <header>
        <h1>Bem vindo ao nosso site</h1>
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/about/bonieky" element={<AboutBonieky />}/>
          <Route path="/about/pedro" element={<AboutPedro />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </section>

      <footer>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
