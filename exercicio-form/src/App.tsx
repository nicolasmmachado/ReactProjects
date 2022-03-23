import './App.css';
import React, {useState} from "react";

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
      <p>Sua Idade: <input type="number" value={age} onChange={changeAge}></input></p>
      <hr />

      <p>Olá {firstName} {lastName}, tudo bem com você?</p>
      <p>Você tem {age} anos.</p>

    </div>
  );
}

export default App;
