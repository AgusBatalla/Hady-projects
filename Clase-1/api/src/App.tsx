import { Routes, Route } from "react-router-dom";

import "bootstrap";
import "@styles/main.scss";

import Home from "@pages/Home";
import Experiencias from "@pages/Experiencias";
import Miembros from "@pages/Miembros";
import Layout from "@layouts/Layout";
import Footer from "@components/Footer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/miembros" element={<Miembros />} />
        <Route path="/miembros/*" element={<Miembros />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/experiencias/*" element={<Experiencias />} />
        <Route path="/footer" element={<Footer />} />
      </Route>
    </Routes>
  );
};

export default App;
