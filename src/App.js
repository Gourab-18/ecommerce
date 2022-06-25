import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Error from "./components/Error";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="*" exact={true} component={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
