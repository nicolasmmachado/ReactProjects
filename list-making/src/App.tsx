import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Pessoa} from "./components/Pessoa"

function App() {
  
  let list = [
    {name:'boniek', age:90},
    {name:'nicolas', age:28},
    {name:'regina', age:54},
    {name:'nei', age:56},
    {name:'tito', age:25},
    {name:'carlos', age:26}
  ];


  /*return (
    <div><ul>
      
        {list.map((item, index)=>(
          <li key={index} >{item.name.toUpperCase()}, {item.age} anos.</li>))}
    </ul>
    </div>
  );*/
  return(
    <ul>
      {list.map((item, index) =>(
        <Pessoa name={item.name.toUpperCase()} age={item.age} key={index}/>))}
    </ul>
  );
}

export default App;
