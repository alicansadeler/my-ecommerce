import Blog from "../components/homeComponents/Blog";
import Brands from "../components/homeComponents/Brands";
import Content from "../components/homeComponents/Content";
import Features from "../components/homeComponents/Features";
import ShopCards from "../components/homeComponents/ShopCards";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden gap-10">
      <Brands />
      <ShopCards />
      <Content />
      <Features />
      <Blog />
    </div>
  );
};

export default HomePage;
