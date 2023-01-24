import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boleto from "./pages/checkout/boleto";
import Pix from "./pages/checkout/pix";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/boleto" element={<Boleto/>}></Route>
        <Route path="/pix" element={<Pix/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
