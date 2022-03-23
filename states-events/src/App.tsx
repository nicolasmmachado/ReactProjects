import React, {useState} from "react";


/*const App = () => {
  let [numero, addNumber] = useState(0);
  
  const buttonClick = () =>{
    alert("Botão foi Clicado.");
    addNumber(numero+=1);
  };
  
  return (
    <div>
      <p>O numero é {numero}</p>
      <button onClick={buttonClick}>Clica ai</button>
      <button onClick={() => {alert("Olá mundo.")}}>Olá computador.</button>
    </div>
  );
}
*/

/*const App = () => {

  let [number, addNumber] = useState(0);

  const addNumber1 = () =>{
    addNumber(number+=1);
  }
  const addNumber5 = () =>{
    addNumber(number+=5);
  }
  const addNumber10 = () =>{
    addNumber(number+=10);
  }

  return (
      <div>
        O numero atual é {number}.
        <br></br>
        <button onClick={addNumber1}>+1</button>
        <button onClick={addNumber5}>+5</button>
        <button onClick={addNumber10}>+10</button>
      </div>
    );
};
*/

/*function App() {

  let [fname, setName] = useState("");

  function alterName(e:React.ChangeEvent<HTMLInputElement>) {
    
    setName(e.target.value);
  }

  return <div>
    <p>Escreva seu nome: <input type="text" value={fname} onChange={alterName}/></p>
    <hr />
    <br />
    <p>Seu nome em maiusculo fica: {fname.toUpperCase()}</p>
  </div>
}*/


function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [age, setAge] = useState("");

  const changeFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const changeAge = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  return (
    <div>
      <p>Seu Primeiro Nome: <input type="text" value={firstName} onChange={changeFirstName}></input></p>
      <p>Seu Sobrenome: <input type="text" value={lastName} onChange={changeLastName}></input></p>
      <p>Sua idade: <input type="number" value={age} onChange={changeAge}></input></p>
      <hr></hr>

      <p>Olá {firstName} {lastName}, tudo bem com você?</p>
      <p>Você tem {age} anos.</p>
    </div>
  );
}




export default App;
