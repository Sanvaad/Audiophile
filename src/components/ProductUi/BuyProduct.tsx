import { useState } from "react";
import useCart from "../../context/useCart";
import { ProductType } from "../../types/ProductType";

interface BuyProductProps {
  product: ProductType;
}

const BuyProduct: React.FC<BuyProductProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [localQuantity, setLocalQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, localQuantity);
  };

  const handleDecrement = () => {
    if (localQuantity > 1) {
      setLocalQuantity(localQuantity - 1);
    }
  };

  const handleIncrement = () => {
    setLocalQuantity(localQuantity + 1);
  };

  return (
    <div className="flex gap-[7rem] mt-7 laptop:mb-[7rem] max-laptop:mb-0 max-laptop:flex-col">
      <div className="mt-20">
        <picture className="">
          <source
            srcSet={product.categoryImage.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={product.categoryImage.tablet}
            media="(min-width: 768px)"
          />
          <img
            src={product.categoryImage.mobile}
            alt={product.name}
            className="max-h-[35rem] min-w-[33rem] mb-[-3rem]"
          />
        </picture>
      </div>
      <div className="laptop:w-[30rem] laptop:mt-36">
        {product.new && (
          <p className="text-orange-500 tracking-widest uppercase mb-4 ">
            New Product
          </p>
        )}
        <h1 className="text-4xl max-laptop:text-[3rem] max-tablet:w-[36rem] font-medium mb-8 text-[2.7rem]">
          {product.name}
        </h1>
        <p className="text-gray-500 mb-8 max-tablet:w-[36rem]">
          {product.description}
        </p>
        <div className="flex gap-4 align-middle max-tablet:w-[36rem]">
          <div className="flex items-center bg-gray-100">
            <button onClick={handleDecrement} className="px-4 py-2 text-2xl">
              -
            </button>
            <span className="px-4 py-2">{localQuantity}</span>
            <button onClick={handleIncrement} className="px-4 py-2 text-2xl">
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-white px-8 py-3 uppercase"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
