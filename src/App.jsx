import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Notfound } from "./pages/Notfound";
import { ProductDetails } from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />}>
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Notfound />} />
        
      </Routes>
    </div>
  );
}

export default App;
