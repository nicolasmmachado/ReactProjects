import React, { useState, useReducer } from 'react';
import './App.css';
//import { useContagem } from "./hooks/contagem"   usado no primeiro teste
import { PersonList } from "./hooks/person"

function App() {
  //primeiro teste com reducer
  /*const [count, countDispatch] = useContagem();

  return (
    <div>
      <p>{count.count}</p>
      <button onClick={() => { countDispatch({type: "ADD"})}}>Adicionar</button>
      <button onClick={() => { countDispatch({type: "DEL"})}}>Deletar</button>
      <button onClick={() => { countDispatch({type: "RESET"})}}>Resetar</button>
    </div>
  );*/

  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [person, personDispatch] = PersonList();

  const handleNameClick = () => {
    if (name !== "") {
      personDispatch({ type: "add", payload: { name } })
      setName("");
    }
  }

  const handleIDClick = () => {
    if (id !== "") {
      personDispatch({ type: "remove", payload: { id } })
      setID("");
    }
  }

  return (
    <div>
      <ul>
        {person.map((item, index) => (
          <li key={index}>Nome: {item.name} ID: {item.id}</li>
        ))
        }
      </ul>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <button onClick={handleNameClick}>Adicionar</button>
      <input type="text" onChange={e => setID(e.target.value)} value={id} />
      <button onClick={handleIDClick}>Remover</button>
      <button onClick={() => { personDispatch({ type: "organize" }) }}>Ordem Alfabética</button>
    </div>
  )
}

export default App;
