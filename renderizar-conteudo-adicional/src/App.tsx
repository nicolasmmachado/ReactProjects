import {useState} from "react";

function App() {

  let [showMe, setShowMe] = useState(false);
  const show = () => {
    setShowMe(!showMe);
  }

  return (
    <div>
      <button onClick={show}>{showMe ? "To aqui maluco" : "Ta escondido"}</button>

      {showMe &&
        <div>
          lorem ipsum dolor sit amet, consectetur adip
        </div>
      }
    </div>
  );
}

export default App;
