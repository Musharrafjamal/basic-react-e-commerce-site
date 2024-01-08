import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <div>
      welcome to my store
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/products/:id" element={<Product />}/>
      </Routes>
    </div>
  );
};

export default App;
