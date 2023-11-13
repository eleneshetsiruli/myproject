import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import "./App.css";

import { Home } from "./Pages/Home/Home";

import AuthContext from "./contexts/AuthContext";
import { Login } from "./Pages/Home/Login/indesx";
import ProtectedRoute from "./components/ProtectedRoute";
import useLocalStage from "./hooks/useLocalStorage";
import { Products } from "./Pages/Home/Products";
import { SignUp } from "./Pages/Home/SignUp";
import { Product } from "./Pages/Product";
import { Admin } from "./Pages/Admin";
import CartContext from "./contexts/CartContext";
import { useState } from "react";
import { Cart } from "./Pages/Cart";
import { Profile } from "./Pages/Profile";
import ProductContext from "./contexts/ProductContext";

function App() {
  const [auth, setAuth] = useLocalStage("auth", {
    isAuthed: false,
    token: null,
  });
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <ProductContext.Provider value={{ data, setData }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/" element={<Home />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="cart" element={<Cart />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<Product />} />
              </Route>
            </Routes>
          </ProductContext.Provider>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
