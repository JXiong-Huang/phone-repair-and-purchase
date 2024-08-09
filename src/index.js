import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import CartInit from "./components/CartInit";
import PhoneInit from "./components/PhoneInit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <CartInit>
          <PhoneInit>
            <App />
          </PhoneInit>
        </CartInit>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
