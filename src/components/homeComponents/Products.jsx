import { products } from "../../products";
import { ProductCard } from "../ProductCard";

export const Product = () => {
  const p = products;
  console.log(products);
  return (
    <>
      <div
        key={products.id}
        className="flex max-w-[1440px] flex-wrap gap-20 items-center justify-center"
      >
        {products.map((item, index) => (
          <ProductCard key={index} products={item} />
        ))}
      </div>
    </>
  );
};
