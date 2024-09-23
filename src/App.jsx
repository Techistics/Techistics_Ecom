import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login';
import './index.css';
import Product from './Components/ProductDetails/Product';
import ProductCarrt from './Components/ProductCarrt';
import Contact from './Components/Contact';

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login';

  return (
    <div className="App" style={{ width: '100%', height: '100%', margin: '0', padding: '0' }}>
      {!hideNavAndFooter && <Navbar />}
      <main style={{ width: '100%', padding: '0', margin: '0' }}>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path = '/product' element = {<Product/>}/>
          <Route path = '/ProductC' element = {<ProductCarrt/>}/>
          <Route path = '/Contact' element = {<Contact/>}/>
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;