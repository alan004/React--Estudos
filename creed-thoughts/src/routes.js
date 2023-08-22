import { BrowserRouter, Routes, Route } from "react-router-dom"

import Menu from "./components/Menu";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />          
        <Route path="*" element={<>Pagina nao existe</>} />        
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;
