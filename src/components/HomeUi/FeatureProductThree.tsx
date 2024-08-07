import productMobile from "../../../public/assets/home/mobile/image-earphones-yx1.jpg";
import productTablet from "../../../public/assets/home/tablet/image-earphones-yx1.jpg";
import productDesktop from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

interface ProductProp {
  slug: string;
}

interface FeatureProductProps {
  product: ProductProp | undefined;
}

export default function FeatureProductThree({ product }: FeatureProductProps) {
  if (!product) return null;
  return (
    <div className="max-tablet:flex-col laptop:max-w-[86vw] mx-[2rem] max-laptop:mx-7 laptop:mx-auto flex max-laptop:gap-3 gap-[4rem] laptop:mb-40 max-laptop:mb-20 max-tablet:mb-10  max-tablet:mx-2 max-tablet:min-w-[32rem] ">
      <div className=" max-tablet:min-w-[41rem] laptop:min-w-[40vw] ">
        <picture className="">
          <source srcSet={productDesktop} media="(min-width: 1024px)" />
          <source srcSet={productTablet} media="(min-width: 768px)" />
          <img
            src={productMobile}
            alt="ZX7 Speaker"
            className=" rounded-lg min-h-[14rem] laptop:min-w-[40vw] max-laptop:min-w-[12rem]  max-tablet:max-w-[42rem] max-tablet:mx-2 "
          />
        </picture>
      </div>
      <div className="bg-gray-200 max-laptop:min-w-[17rem] max-laptop:mx-auto laptop:w-[50rem]  rounded-md min-h-[14rem] max-tablet:mb-20 max-tablet:min-w-[41rem] max-tablet:mx-3 flex  flex-col text-center justify-center items-center">
        <h2 className="laptop:mt-5  max-laptop:mt-3 text-[1.7rem] mb-7 font-medium">
          YX1 EARPHONES
        </h2>
        <Link
          to={`/product/${product.slug}`}
          className="w-[14rem]  border  border-[#333] py-2.5 text-[.9rem]  hover:bg-black hover:text-white transition-colors"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
