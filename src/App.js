import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boleto from "./pages/checkout/boleto";
import Cartao from "./pages/checkout/cartao-de-credito";
import Pix from "./pages/checkout/pix";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//import ShoppingBag from "./pages/shoppingBag/shoppingBag.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/cadastro" element={<SignUp/>}></Route>
        {/* <Route path="/shoppingBag" element={<ShoppingBag/>}></Route> */}
        <Route path="/boleto" element={<Boleto/>}></Route>
        <Route path="/pix" element={<Pix/>}></Route>
        <Route path="/cartao-de-credito" element={<Cartao/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
