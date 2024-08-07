import ProductCard from "./ProductCard";
import products from "../../data/products.json";
import CategoryLink from "../HomeUi/CategoryLink";
import Description from "../HomeUi/Description";

interface CategoryProps {
  category: string;
}

const CategoryPage: React.FC<CategoryProps> = ({ category }) => {
  const categoryProducts = products.products
    .filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    )
    .sort((a, b) => {
      // Sort new products first
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return 0;
    });

  console.log(categoryProducts);

  return (
    <div className="">
      <h2 className="max-tablet:min-w-[44rem] text-4xl font-medium text-white bg-[#191919] text-center w-screen py-20 mb-20 uppercase max-laptop:min-w-[52.4rem]  ">
        {category}
      </h2>
      <div className="container mx-auto px-4 ">
        <div className="mb-[15rem] max-tablet:min-w-[30rem] max-tablet:flex-col max-tablet:items-center">
          {categoryProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
        <CategoryLink />
        <Description />
      </div>
    </div>
  );
};

export default CategoryPage;
