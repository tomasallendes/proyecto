import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarUp from './components/NavbarUp';
import ProductDetail from './components/ProductDetail';
import Carrito from './components/Carrito';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import Contacto from './components/Contacto';
import { CartProvider } from './components/Cartcontext';  // Importa el CartProvider
import Footer from './components/Footer'; 

const MainLayout = ({ children }) => (
  <>
    <NavbarUp />
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <CartProvider>  {/* Envolver todo en CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/productos/:categoria" element={<MainLayout><Products /></MainLayout>} />  {/* Ruta general */}
          <Route path="/contacto" element={<MainLayout><Contacto /></MainLayout>} />
          <Route path="/carrito" element={<MainLayout><Carrito /></MainLayout>} />
          <Route path="/product/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
