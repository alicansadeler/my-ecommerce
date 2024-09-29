import Brands from "../components/homeComponents/Brands";
import ShopCards from "../components/homeComponents/ShopCards";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Brands />
      <ShopCards />
    </div>
  );
};

export default HomePage;
