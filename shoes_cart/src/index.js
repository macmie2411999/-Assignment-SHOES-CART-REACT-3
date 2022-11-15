// npx create-react-app nameProjectFolder
// npm install -S react-router-dom
// npm i react-router-dom
// npm i sass-loader

import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeTemplate from './template/HomeTemplates'
import Home from './body/Home'
import Register from './body/Register'
import Cart from './body/Cart'
import Detail from './body/Detail'
import Footer from './footer/Footer'
import Header from './header/Header'

// set up react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// import css
import "../src/css/footer.min.css";
import "../src/css/header.min.css";
import "../src/css/details.min.css";
import "../src/css/register.min.css";
import "../src/css/index.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX 
root.render(
  <>
  <BrowserRouter>
      <Routes>
        {/* Dinh nghia trang cho link mac dinh */}
        <Route path="" element={<HomeTemplate />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="detail" element={<Detail />}></Route>
          <Route path="cart" element={<Cart />}></Route>

          {/*Default link for invalid link */}
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)
