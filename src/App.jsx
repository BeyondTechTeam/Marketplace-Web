import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Contacts from "./Pages/contacts/Contacts";
import Sell from "./Pages/sell/Sell";
import LandingPage from "./Pages/landing";
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
      </Routes>
    </Router>
  );
}

export default App;
