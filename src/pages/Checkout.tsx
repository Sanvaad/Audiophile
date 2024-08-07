import CheckoutForm from "../components/CheckoutUi/CheckoutForm";
import CheckoutSummary from "../components/CheckoutUi/CheckoutSummary";

import useCart from "../context/useCart";

const Checkout = () => {
  const { cartItems } = useCart();

  const hasItems: boolean = cartItems.some((item) => item.quantity > 0);

  return (
    <>
      {hasItems ? (
        <>
          <h3 className="ml-[6.6rem] pt-7 text-[#707070]">Go back</h3>
          <div className="flex justify-between max-w-7xl mx-auto px-6 py-12 max-laptop:flex-col max-laptop:items-center max-tablet:min-w-[45rem] max-tablet:mx-auto ">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </>
      ) : (
        <div className="flex h-[30vh]  justify-center items-center">
          <h2 className="text-[2.4rem] font-bold">
            Oops! Seems like your cart is empty 🛒
          </h2>
        </div>
      )}
    </>
  );
};

export default Checkout;
