import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boleto from "./pages/checkout/boleto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/boleto" element={<Boleto/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
