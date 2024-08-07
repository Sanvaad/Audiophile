import { useEffect } from "react";
import arrowRight from "../../../public/assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";

type CategoryCardProps = {
  name: string;
  image: string;
};

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  const getPath = (name: string) => {
    switch (name.toLowerCase()) {
      case "headphones":
        return "/headphones";
      case "earphones":
        return "/earphones";
      case "speakers":
        return "/speakers";
      default:
        return "/";
    }
  };

  return (
    <div className="bg-[#eeececac] w-full laptop:h-40 flex justify-center items-center rounded-md mb-20 max-laptop:h-48 max-laptop:w-[20rem] max-laptop:items-center max-tablet:min-h-[3rem]  max-tablet:min-w-[6rem]   ">
      <div className="flex flex-col items-center mb-20">
        <img src={image} alt={name} className="h-36 mr-6 max-tablet:h-[8rem]" />
        <div className="flex flex-col items-center">
          <span className="font-medium text-lg tracking-wide">{name}</span>

          <button className="flex items-center text-gray-500 gap-3 font-medium text-sm tracking-wide mt-3">
            <NavLink to={getPath(name)}>SHOP</NavLink>

            <img src={arrowRight} alt="Arrow Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
