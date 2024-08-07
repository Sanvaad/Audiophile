import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { CartProvider } from "../../context/CartContext";
import CartModal from "./CartModal";

export default function AppLayout() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <CartProvider>
      <div>
        <Navbar setShowModal={setShowModal} showModal={showModal} />
        <CartModal showModal={showModal} setShowModal={setShowModal} />
        <Outlet />
      </div>
    </CartProvider>
  );
}
