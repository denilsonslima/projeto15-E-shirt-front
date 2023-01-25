import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boleto from "./pages/checkout/boleto";
import Pix from "./pages/checkout/pix";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/cadastro" element={<SignUp/>}></Route>
        <Route path="/boleto" element={<Boleto/>}></Route>
        <Route path="/pix" element={<Pix/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
