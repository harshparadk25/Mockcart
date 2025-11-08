import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./pages/Navbar.jsx";
import Checkout from "./pages/Checkout.jsx";
import Receipt from "./pages/Receipt.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

     

<Routes>
  <Route path="/" element={<Products />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/receipt" element={<Receipt />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
