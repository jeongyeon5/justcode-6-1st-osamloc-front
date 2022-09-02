import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Login/Signup/Signup";
import Main from "./Main/\bindex";
import WeeklyBest from "./Products/WeeklyBest";
import Best from "./Products/WeeklyBest/Best";
import Products from "./Products/TeaProducts";
import Cart from "./Cart/Cart";
import Payment from "./Cart/Payment";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/weeklybest" element={<WeeklyBest />} />
        <Route path="/weeklybest/best" element={<Best />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment/:cartlist" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
