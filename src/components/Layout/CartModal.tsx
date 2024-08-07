// src/components/CartModal.jsx
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

interface NavbarProps {
  setShowModal: (value: boolean) => void;
  showModal: boolean;
}

const CartModal = ({ showModal, setShowModal }: NavbarProps) => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const totalQuantity: number = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const total: number = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="z-[9999] fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start pt-20 pr-20"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-8 w-96 "
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">CART ({totalQuantity})</h2>
              <button
                onClick={clearCart}
                className="text-gray-500 hover:text-gray-700"
              >
                Remove All
              </button>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.product.cartImage}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-500">
                      {item.product.shortName}
                    </p>
                    <p className="text-gray-500">${item.product.price}</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 rounded">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <span className="px-3 text-gray-500">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.product.id)}>
                  X
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6 mb-6">
              <span className="text-gray-500">TOTAL</span>
              <span className="font-bold">${total.toLocaleString()}</span>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-orange-500 text-white py-3 px-[7.4rem] rounded hover:bg-orange-600 transition duration-300"
              onClick={() => setShowModal(false)}
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
