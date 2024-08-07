import { ProductType } from "../../types/ProductType";

interface BuyProductProps {
  product: ProductType;
}

const FeaturesSection: React.FC<BuyProductProps> = ({ product }) => {
  return (
    <div className="flex justify-between laptop:max-w-[90rem] mx-auto pt-14 mb-20 max-laptop:flex-col">
      <div className="max-laptop:max-w-[30rem]">
        <h2 className="text-[2rem] font-medium mb-4">FEATURES</h2>
        <p className="mb-4 text-gray-400 font-light max-w-[40rem] mx-auto">
          {product.features}
        </p>
      </div>

      <div className="laptop:w-[20rem] ">
        <h2 className="text-3xl font-bold mb-4">IN THE BOX</h2>
        <ul>
          {product.includedItems.map((item, index) => (
            <li key={index} className="flex mb-2">
              <span className="text-orange-500 font-bold w-8">
                {item.quantity}x
              </span>
              <span>{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesSection;
