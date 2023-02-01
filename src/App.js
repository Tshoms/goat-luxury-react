import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Pages/pages/Home";
import LoginPage from "./components/Pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/acceuil" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
