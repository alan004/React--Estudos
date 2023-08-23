import { BrowserRouter, Routes, Route } from "react-router-dom"

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Rodape from "components/Footer";
import BaseHeading from "components/BaseHeading";
import About from "pages/About";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<BaseHeading/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />          
        </Route>
        <Route path="*" element={<>Pagina nao existe</>} />        
      </Routes>
      <Rodape/>
    </BrowserRouter>

  );
}

export default AppRoutes;
