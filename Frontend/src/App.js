import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbarr from "./components/layout/Navbarr";

import HomePage from "./pages/Home/Home";
import ContactoPage from "./pages/Contacto/Contacto";
import CoberturaPage from "./pages/Cobertura/Cobertura";
import NovedadesPage from "./pages/Novedades/Novedades";






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cobertura" element={<CoberturaPage />} />
          <Route path="/Contacto" element={<ContactoPage />} />
          <Route path="/Novedades" element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
