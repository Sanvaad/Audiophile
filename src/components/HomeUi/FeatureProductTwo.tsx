import productDesktop from "../../../public/assets/home/desktop/image-speaker-zx7.jpg";
import productTablet from "../../../public/assets/home/tablet/image-speaker-zx7.jpg";
import productMobile from "../../../public/assets/home/mobile/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";

interface ProductProp {
  slug: string;
}

interface FeatureProductProps {
  product: ProductProp | undefined;
}

export default function FeatureProductTwo({ product }: FeatureProductProps) {
  if (!product) return null;

  return (
    <div className="  laptop:max-w-[86vw] laptop:mx-auto max-laptop:mx-[2rem] mb-14 max-tablet:min-w-[40rem] max-tablet:mx-7">
      <div className="relative w-full rounded-lg overflow-hidden bg-[#f1f1f1]">
        <picture className="">
          <source srcSet={productDesktop} media="(min-width: 1024px)" />
          <source srcSet={productTablet} media="(min-width: 768px)" />
          <img
            src={productMobile}
            alt="ZX7 Speaker"
            className="w-full h-auto"
          />
        </picture>
        <div className="absolute left-0 top-0 h-full flex flex-col justify-center ml-24">
          <h2 className="text-[28px] font-bold mb-8">ZX7 SPEAKER</h2>
          <Link
            to={`/product/${product.slug}`}
            className="bg-transparent border border-black px-8 py-3 text-sm font-bold hover:bg-black hover:text-white transition-colors w-fit"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
}
