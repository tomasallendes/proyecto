import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarUp from './components/NavbarUp';
import Colgantes from './components/Colgantes';
import Decoraciones from './components/Decoraciones';
import Muebles from './components/Muebles';
import ProductDetail from './components/ProductDetail';
import Carrito from './components/Carrito';
import Login from './components/Login';
import Home from './components/Home';
import Temporada from './components/Temporada';
import Contacto from './components/Contacto';

const MainLayout = ({ children }) => (
  <>
    <NavbarUp />
    <Navbar />
    {children}
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/temporada" element={<MainLayout><Temporada /></MainLayout>} />
        <Route path="/decoraciones" element={<MainLayout><Decoraciones /></MainLayout>} />
        <Route path="/muebles" element={<MainLayout><Muebles /></MainLayout>} />
        <Route path="/contacto" element={<MainLayout><Contacto /></MainLayout>} />
        <Route path="/colgantes" element={<MainLayout><Colgantes /></MainLayout>} />
        <Route path="/carrito" element={<MainLayout><Carrito /></MainLayout>} />
        <Route path="/product/:productId" element={<MainLayout><ProductDetail /></MainLayout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
