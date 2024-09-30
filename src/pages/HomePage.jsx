import Brands from "../components/homeComponents/Brands";
import Content from "../components/homeComponents/Content";
import ShopCards from "../components/homeComponents/ShopCards";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Brands />
      <ShopCards />
      <Content />
    </div>
  );
};

export default HomePage;
