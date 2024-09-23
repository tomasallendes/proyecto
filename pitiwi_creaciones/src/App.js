import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Carrito from './components/Carrito';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/"/>
        <Route path="/about"/>
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>     
    </Router>
    
  );
};


export default App;
