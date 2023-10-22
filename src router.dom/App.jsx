import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home.jsx/> } />
          <Route path="/about" element={<Product.jsx />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
