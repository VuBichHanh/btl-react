import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/products' exact element={<Products />}/>
        <Route path='/services' exact element={<Services />}/>
        <Route path='/sign-up' exact element={<SignUp />}/>
        <Route path='/sign-in' exact element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
