import { ProductType } from "../../types/ProductType";

interface BuyProductProps {
  product: ProductType;
}

const ProductGallery: React.FC<BuyProductProps> = ({ product }) => {
  console.log("Gallery images:", product.gallery);

  return (
    <div className="grid grid-cols-2 gap-4 min-w-[36rem] mx-auto p-4 mb-20">
      <div className=" ">
        <img
          src={product.gallery.first.desktop}
          alt="Headphones with lights"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="row-span-1 col-start-1">
        <img
          src={product.gallery.second.desktop}
          alt="Headphones on stand"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="col-start-2 row-start-1 row-end-3 col-span-1">
        <img
          src={product.gallery.third.desktop}
          alt="Accessories on table"
          className="w-full h-full object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default ProductGallery;
