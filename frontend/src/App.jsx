import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Landing_page/home/HomePage";
import SignUp from "./Landing_page/signup/SignUp";
import AboutPage from "./Landing_page/about/AboutPage";
import ProductPage from "./Landing_page/product/ProductPage";
import PricingPage from "./Landing_page/pricing/PricingPage";
import SupportPage from "./Landing_page/support/SupportPage";

import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import NotFound from "./Landing_page/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
