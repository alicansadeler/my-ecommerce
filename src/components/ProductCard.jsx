export const ProductCard = ({ products }) => {
  // oncLick eklenecek, tıklanabilir. Product detail sayfasına

  const totalPrice = products.price + Math.floor(Math.random() * 20 + 5);
  return (
    <div className="p-4 w-[238px]  font-montserrat shadow-md">
      <img
        src={products.images[0]?.url || "default-image.jpg"}
        alt={products.name}
        className="w-full h-64 object-cover "
      />
      <h2 className="text-[16px] font-bold mt-3 mb-3">{products.name}</h2>

      <p className="text-bgGray text-[16px] mb-3 font-bold">
        English Department
      </p>
      <div className="flex justify-center items-center gap-3">
        <p className="text-sm font-bold text-bgPriceGray">₺{totalPrice}</p>
        <p className="text-lg font-bold text-bgPriceGreen">₺{products.price}</p>
      </div>
    </div>
  );
};
