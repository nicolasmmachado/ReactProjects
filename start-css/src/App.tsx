import {useState} from "react"
//CSS INLINE-Na linha    apagar comentários para ver melhor
/*function App() {
  const [padding, setPadding] = useState(0);
  const handleClick = () =>{
    if(padding ===0)
    setPadding(20);
    else
    setPadding(0);
  }
  return (
    <div>
      <button onClick={handleClick} style={{border:"none", backgroundColor:"#999", color:"green", padding}}>Testando CSS</button>
    </div>
  );
}*/


//CSS importado das folhas de estilo/CSS Stylesheet
import {Botao} from "./components/Botao"

function App() {
  
  return (
    <div>
      <Botao />
    </div>
  );
}

export default App;
