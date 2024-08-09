import "./App.css";
import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Repair from "./components/Repair";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";
import Detail from "./components/Detail";
import Layout from "./components/Layout";
import { CartContext } from "./contexts/CartContext";
import Checkout from "./components/Checkout";
import Confirm from "./components/Confirm";

export default function App() {
  const { cart } = useContext(CartContext);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <>
      <Layout>
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </>
  );
}
