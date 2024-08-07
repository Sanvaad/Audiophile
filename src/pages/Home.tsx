import products from "../data/products.json";
import Hero from "../components/HomeUi/Hero";
import CategoryLink from "../components/HomeUi/CategoryLink";
import FeatureProductOne from "../components/HomeUi/FeatureProductOne";
import FeatureProductTwo from "../components/HomeUi/FeatureProductTwo";
import FeatureProductThree from "../components/HomeUi/FeatureProductThree";
import Description from "../components/HomeUi/Description";

interface Product {
  slug: string;
}

interface ProductsData {
  products: Product[];
}

export default function Home() {
  const productsData: ProductsData = products;

  const productXX99II = productsData.products.find(
    (p) => p.slug === "xx99-mark-one-headphones"
  );
  const productZX9 = productsData.products.find(
    (p) => p.slug === "zx9-speaker"
  );
  const productZX7 = productsData.products.find(
    (p) => p.slug === "zx7-speaker"
  );
  const productYX1 = productsData.products.find(
    (p) => p.slug === "yx1-earphones"
  );

  return (
    <div>
      {/* Hero Section */}
      <Hero product={productXX99II} />
      <CategoryLink />
      <FeatureProductOne product={productZX9} />
      <FeatureProductTwo product={productZX7} />
      <FeatureProductThree product={productYX1} />
      <Description />
    </div>
  );
}
