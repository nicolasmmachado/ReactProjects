/*
    Aprendendo sobre funções no jsx e como podemos usar html junto do mesmo

import React from 'react';
function app(){
  return <div>Olá mundo</div>;
}

//export default app;

const teste = () => {
  return <div>Teste 1,2,3...</div>
  //return React.createElement("div", {}, "Teste 1,2,3...")
}

export default teste;*/

//Aprendendo sobre expressões

import {Teste} from "./components/Teste";
import { Photo } from "./components/Photo";

const App = () => {
  let name: string = "Nícolas";
  let numero1: number = 22;
  let numero2: number = 10;

  function somar(n1: number, n2: number): number {
    return n1 + n2;
  }

  function multiplicar(n1: number, n2: number): number{
    return n1 * n2;
  }
  
  /*return (<div>
    Meu nome é {name}, temos os valores {numero1} e {numero2}, a soma dos valores é {somar(numero1, numero2)} e a multiplicação é {multiplicar(numero1, numero2)}
    <Teste title="Estamos aprendendo."/> .
    <Photo src="../../favicon.ico" alt="Teste de imagem" name="Doidera de REACT"/>
  </div>/*isso é uma expressão {}, dentro do código HTML podemos inserir JS e vice-versa.)*/

  return (
    <div>
      <Photo>
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Photo>
    </div>
  )
}

export default App;



