import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import Home from "./pages/Home";
import Tratamientos from "./pages/Tratamientos";
import SpaRelax from "./pages/SpaRelax";
import NavBar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Contacto from "./components/Home/Contacto";
import Tecnologia from "./pages/Tecnologia";
import ElectroFitness from "./pages/ElectroFitness";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/tratamientos" element={<Tratamientos />}></Route>
        <Route path="/spa-relax" element={<SpaRelax />}></Route>
        <Route path="/tecnologia" element={<Tecnologia />}></Route>
        <Route path="/electro-fitness" element={<ElectroFitness />}></Route>
      </Routes>
      <Contacto></Contacto>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
