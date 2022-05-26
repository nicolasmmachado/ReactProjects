import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { ShowData } from "./pages/ShowData";
import { ContextProvider } from "./contexts/Context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Header</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/info" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
