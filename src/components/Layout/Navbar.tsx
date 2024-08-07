import cart from "../../../public/assets/shared/desktop/icon-cart.svg";
import burger from "../../../public/assets/shared/burger-menu-svgrepo-com.svg";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useCart from "../../context/useCart";

interface NavbarProps {
  setShowModal: (value: boolean) => void;
  showModal: boolean;
}

export default function Navbar({ setShowModal }: NavbarProps) {
  const { cartItems } = useCart();
  const totalQuantity: number = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className=" flex max-tablet:min-[40rem]laptop:flex laptop:justify-between laptop:items-center laptop:w-full h-[12vh] laptop:px-[10rem] bg-[#191919] text-white max-laptop:px-10 max-laptop:flex max-laptop:min-w-[52.4rem] items-center max-laptop:justify-between py-3 max-tablet:min-w-[44rem]">
      <div className="max-laptop:flex max-laptop:items-center gap-6">
        <img
          src={burger}
          alt=""
          className="h-10 laptop:hidden max-laptop:h-6"
        />
        <Logo />
      </div>
      <NavLinks />
      <div className="">
        <img
          onClick={() => setShowModal(true)}
          src={cart}
          alt="cart"
          className="h-6 max-laptop:h-5 cursor-pointer"
        />
        <span className="absolute laptop:top-[1.4rem] laptop:right-[9.3rem] bg-[#D87D4A] text-xs rounded-full w-5 h-5 flex items-center justify-center max-laptop:top-[1.7rem] max-laptop:right-[1.8rem]  max-tablet:fixed">
          {totalQuantity}
        </span>
      </div>
    </nav>
  );
}
