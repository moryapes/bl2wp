import "./style/style.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Guide from "./pages/guide/Guide";
import CatalogWeapons from "./pages/catalogWeapon/CatalogWeapons";
import CatalogShields from "./pages/catalogShields/CatalogShields";
import CatalogGrenades from "./pages/catalogGrenades/CatalogGrenades";
import Card from "./components/card/Card";
import Catalog from "./pages/catalog/Catalog";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Card />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalogWeapon" element={<CatalogWeapons />} />
          <Route path="/catalogShields" element={<CatalogShields />} />
          <Route path="/catalogGrenades" element={<CatalogGrenades />} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
