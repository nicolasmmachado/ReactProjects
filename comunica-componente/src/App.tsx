
import './App.css';
import { Botao } from "./components/Botao";

function App() {

  const executeFunction = (txt:string) =>{
    alert("Clicou no botao pelo App" + txt)
  }
  return (
    <div>
      <Botao text="Mudamos o texto" exFunction={executeFunction}/>
    </div>
  );
}

export default App;
