import { products } from "../../products";
import { ProductCard } from "../ProductCard";
import { useState } from "react";

export const Product = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const hideProducts = () => {
    setVisibleProducts(4);
  };

  const isShowingAll = visibleProducts >= products.length;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex max-w-[1440px] flex-wrap gap-20 items-center justify-center">
        {products.slice(0, visibleProducts).map((item, index) => (
          <ProductCard key={index} products={item} />
        ))}
      </div>

      <button
        onClick={isShowingAll ? hideProducts : loadMore}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
      >
        {isShowingAll ? "Hide Products" : "Load More Products"}
      </button>
    </div>
  );
};
