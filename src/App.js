import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import Home from "./components/Pages/pages/home/Home";
import LoginPage from "./components/Pages/login/LoginPage";
import ProductShowCase from "./components/Pages/pages/productpage/ProductShowCase";
import Cart from "./components/Pages/pages/cartpage/Cart";
import DeliveryOrder from "./components/Pages/pages/delivery/DeliveryOrder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/acceuil/:user" element={<Home />} />
        <Route path="/produit/:id" element={<ProductShowCase />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/payment/:price" element={<DeliveryOrder />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
