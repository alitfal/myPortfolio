import { React, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Principal from "../views/Principal";
import Curriculum from "../views/Curriculum";
import Proyectos from "../views/Proyectos";
import Servicios from "../views/Servicios";
import Contacto from "../views/Contacto";
import Error404 from "../views/Error404";
import HeaderNav from "../components/layout/HeaderNav.tsx";
import Footer from "../components/layout/Footer";

const MisRutas = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        {/* Header y Navegacion */}
        <HeaderNav />
        <hr />
        {/* Contenido Central */}
        <Routes>
          <Route path="/" element={<Principal />} />
          {/* Se crea otra Ruta a principal*/}
          <Route path="/principal" element={<Principal />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
        {/* Footer */}
        <hr />
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default MisRutas;
