import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Pages/pages/home/Home";
import LoginPage from "./components/Pages/login/LoginPage";
import ProductShowCase from "./components/Pages/pages/productpage/ProductShowCase";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/acceuil/:user" element={<Home />} />
        <Route path="/produit/:id" element={<ProductShowCase />} />
      </Routes>
    </div>
  );
}

export default App;
