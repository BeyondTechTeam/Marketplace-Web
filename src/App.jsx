import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landing/LandingPage";
import Shop from "./pages/shop/Shop";
import Contacts from "./pages/contacts/Contacts";
import Sell from "./pages/sell/Sell";

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
