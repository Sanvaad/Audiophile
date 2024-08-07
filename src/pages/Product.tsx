import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products.json";
import FeatureSection from "../components/ProductUi/FeaturesSection";
import ProductGallery from "../components/ProductUi/ProductGallery";
import BuyProduct from "../components/ProductUi/BuyProduct";
import Suggestions from "../components/ProductUi/Suggestions";
import CategoryLink from "../components/HomeUi/CategoryLink";
import Description from "../components/HomeUi/Description";
import { ProductType } from "../types/ProductType";

const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const foundProduct = products.products.find((p) => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle product not found
      navigate("/404");
    }
  }, [slug, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <div className="container w-[80vw] mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="mb-8 text-gray-500">
          Go Back
        </button>

        {product && (
          <>
            <BuyProduct product={product} />
            <FeatureSection product={product} />
            <ProductGallery product={product} />
            <Suggestions product={product} />
          </>
        )}
      </div>

      <CategoryLink />
      <Description />
    </>
  );
};

export default Product;
