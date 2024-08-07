import { Link } from "react-router-dom";

interface Suggestion {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface SuggestionsProps {
  product: {
    others: Suggestion[];
  };
}

const Suggestions: React.FC<SuggestionsProps> = ({ product }) => {
  return (
    <div className="container max-tablet:min-w-[36rem] mx-auto mb-40 px-4">
      <h2 className="text-center uppercase text-[2rem] font-medium mb-10">
        You may also like
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-tablet:grid-cols-1">
        {product.others.map((suggestion, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={suggestion.image.desktop}
              alt={suggestion.name}
              className="w-full max-tablet:h-60 max-tablet:w-[20rem]"
            />
            <h3 className="text-[1.6rem] font-medium mb-4 mt-7">
              {suggestion.name}
            </h3>
            <Link
              to={`/product/${suggestion.slug}`}
              className="bg-orange-500 text-white px-6 py-2.5 uppercase font-bold rounded hover:bg-orange-600 transition-colors"
            >
              See Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
