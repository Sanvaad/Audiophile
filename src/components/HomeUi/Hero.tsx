import headphonesDesktop from "../../../public/assets/home/desktop/image-hero.jpg";
import headphonesTablet from "../../../public/assets/home/tablet/image-header.jpg";
import headphonesMobile from "../../../public/assets/home/mobile/image-header.jpg";
import { Link } from "react-router-dom";

interface ProductProp {
  slug: string;
}

interface FeatureProductProps {
  product: ProductProp | undefined;
}

export default function Hero({ product }: FeatureProductProps) {
  if (!product) return null;
  return (
    <div className="relative h-[76vh] z-0  flex bg-[#191919] overflow-hidden mb-[15.3rem]  mx-auto max-tablet:min-w-[44rem] max-laptop:min-w-[52.4rem]  max-tablet:min-h-[30rem] items-center">
      <picture className="">
        <source srcSet={headphonesDesktop} media="(min-width: 1024px)" />
        <source srcSet={headphonesTablet} media="(min-width: 768px)" />
        <img
          src={headphonesMobile}
          alt="XX99 Mark II Headphones"
          className=" absolute right-0 top-[15rem] transform -translate-y-1/2 max-h-[40rem] max-laptop:left-1/2 max-laptop:transform max-laptop:-translate-x-1/2 "
        />
      </picture>
      <div className="z-0 text-white w-[25rem] ml-40 mb-20 max-laptop:mx-auto max-laptop:text-center">
        <h2 className="text-sm tracking-[0.5em] text-gray-400 mb-4">
          NEW PRODUCT
        </h2>
        <h1 className="text-[3rem] font-bold mb-6">XX99 MARK II HEADPHONES</h1>
        <p className="text-gray-400 mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          to={`/product/${product.slug}`}
          className="bg-[#D87D4A] text-white px-8 cursor-pointer py-3 hover:bg-[#FBAF85] transition-colors"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
