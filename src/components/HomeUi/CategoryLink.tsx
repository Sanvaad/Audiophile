import CategoryCard from "./CategoryCard";
import headphones from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";

export default function CategoryLink() {
  const categories = [
    { name: "HEADPHONES", image: headphones },
    { name: "SPEAKERS", image: speakers },
    { name: "EARPHONES", image: earphones },
  ];

  return (
    <div className="flex w-3/4 max-laptop:min-w-[30rem] max-laptop:mx-[7rem] laptop:mx-auto justify-between gap-10 mb-40 max-tablet:mix-w-[30rem]  max-tablet:flex max-tablet:items-center">
      {categories.map((category) => (
        <CategoryCard image={category.image} name={category.name} />
      ))}
    </div>
  );
}
