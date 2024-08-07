import featureProductOne from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import patternCircle from "../../../public/assets/home/desktop/pattern-circles.svg";
import { Link } from "react-router-dom";

interface ProductProp {
  slug: string;
}

interface FeatureProductProps {
  product: ProductProp | undefined;
}

export default function FeatureProductOne({ product }: FeatureProductProps) {
  if (!product) return null;
  return (
    <div className="bg-[#d87d4a] laptop:max-w-[85vw] laptop:mx-auto max-laptop:mx-[2rem] rounded-lg laptop:h-[39rem] max-laptop:h-[47rem] overflow-hidden mb-14  max-tablet:min-w-[40rem]  max-tablet:mx-7">
      <div className="relative flex items-center laptop:gap-24 p-24 max-laptop:flex-col">
        <div className="absolute top-0 left-0 w-full h-full ">
          <img
            src={patternCircle}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 laptop:max-w-[70rem] max-laptop:mb-20 ">
          <img
            src={featureProductOne}
            alt="ZX9 Speaker"
            className="w-full  object-contain z-[9999] laptop:max-h-[34rem] max-laptop:h-[15rem]"
          />
        </div>
        <div className="relative z-10 w-[22rem] text-white mb-20 max-laptop:text-center">
          <h2 className="text-6xl font-bold mb-6 tracking-widest ">
            ZX9 SPEAKER
          </h2>
          <p className="mb-8 font-extralight text-[#ffffff7f]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            to={`/product/${product.slug}`}
            className="bg-black text-white px-6 py-3 uppercase hover:bg-[#333] cursor-pointer transition-colors"
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}
