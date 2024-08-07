import { Link } from "react-router-dom";

import { ProductType } from "../../types/ProductType";

interface ProductCardProps {
  product: ProductType;
  isReversed: boolean;
}

const ProductCard = ({ product, isReversed }: ProductCardProps) => (
  <div
    className={`flex ${
      isReversed ? "flex-row-reverse" : "flex-row"
    } mx-10 mb-[7rem] laptop:gap-[14rem]   max-laptop:flex-col max-tablet:w-[37rem] max-tablet:flex max-tablet:justify-center`}
  >
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
        alt=""
        className="rounded-lg w-[50rem] "
      />

      {/*  */}
    </picture>
    <div className="w-[34rem]  flex-col my-auto max-laptop:text-center mx-auto">
      {product.new && (
        <p className="text-[#D87D4A] uppercase tracking-[0.5em] mb-4">
          New Product
        </p>
      )}
      <h3 className="text-4xl font-bold mb-8 uppercase max-desktop:text-3xl">
        {product.name}
      </h3>
      <p className="text-gray-500 mb-10">{product.description}</p>
      <Link to={`/product/${product.slug}`}>
        <button className="bg-[#D87D4A] text-white px-8 py-3 hover:bg-[#FBAF85] transition-colors uppercase">
          See Product
        </button>
      </Link>
    </div>
  </div>
);

export default ProductCard;
