import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shop from "./pages/shop/Shop";
import Contacts from "./pages/contacts/Contacts";
import Sell from "./pages/sell/Sell";
import LandingPage from "./pages/landing";
import Checkout from "./pages/checkout/checkout";

import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
