import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/valoresGlobais";
import { useState } from "react";

import Boleto from "./pages/checkout/boleto";
import Cartao from "./pages/checkout/cartao-de-credito";
import Pix from "./pages/checkout/pix";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShoppingBag from "./pages/shoppingBag/shoppingBag.jsx";
import Qrcode from "./pages/checkout/qr-code";

function App() {
  const [carrinhoTeste,setCarrinhoTeste] = useState([])
  return (
    <div className="App">
      <UserContext.Provider value={{ carrinhoTeste, setCarrinhoTeste }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<SignUp />}></Route>
            <Route path="/shoppingBag" element={<ShoppingBag />}></Route>
            <Route path="/boleto" element={<Boleto />}></Route>
            <Route path="/pix" element={<Pix />}></Route>
            <Route path="/cartao-de-credito" element={<Cartao />}></Route>
            <Route path="/qr-code" element={<Qrcode />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
