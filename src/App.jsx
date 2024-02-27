import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/shop/Shop";
import LandingPage from "./pages/landing/LandingPage";
import Contacts from "./components/contact/Contacts";
import Sell from "./pages/sell/Sell";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
