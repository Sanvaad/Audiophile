// src/components/CheckoutSummary.tsx
import React from "react";
import { useCart } from "../../context/CartContext";

const CheckoutSummary: React.FC = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping + vat;

  return (
    <div className="w-1/3 ml-8 bg-[#f9f7f7] p-6 rounded-lg h-fit max-laptop:w-[93vw] max-laptop:mx-auto max-tablet:min-w-[40rem]">
      <h2 className="text-lg font-bold mb-6">SUMMARY</h2>
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.product.id} className="flex items-center">
            <img
              src={item.product.cartImage}
              alt={item.product.shortName}
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div className="flex-grow">
              <p className="font-bold">{item.product.shortName}</p>
              <p className="text-gray-500">${item.product.price}</p>
            </div>
            <p className="font-bold">x{item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="flex justify-between">
          <span className="text-gray-500">TOTAL</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-500">SHIPPING</span>
          <span className="font-bold">${shipping.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-500">VAT (INCLUDED)</span>
          <span className="font-bold">${vat.toFixed(2)}</span>
        </p>
        <p className="flex justify-between mt-6">
          <span className="text-gray-500">GRAND TOTAL</span>
          <span className="text-orange-500 font-bold">
            ${grandTotal.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
