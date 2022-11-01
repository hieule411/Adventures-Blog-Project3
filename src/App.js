import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Signup';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
