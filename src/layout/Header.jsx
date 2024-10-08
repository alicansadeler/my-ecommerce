import { CarouselHeader } from "../components/headerComponents/CarouselHeader";
import NavbarDark from "../components/headerComponents/NavbarDark";
import NavbarLight from "../components/headerComponents/NavbarLight";

const Header = () => {
  return (
    <div className="w-full">
      <NavbarDark />
      <NavbarLight />
      <CarouselHeader />
    </div>
  );
};

export default Header;
//
