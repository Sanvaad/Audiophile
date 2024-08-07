import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/Layout/AppLayout";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";

import CheckoutForm from "./pages/Checkout";

import ScrollToTop from "./utils/ScrollTop";
import OrderConfirmed from "./pages/OrderConfirmed";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
