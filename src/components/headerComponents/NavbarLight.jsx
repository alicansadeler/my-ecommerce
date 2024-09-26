import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";

const NavbarLight = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleClick = () => {
    setIsShopOpen(!isShopOpen);
  };

  const MobileHamburgerContent = () => (
    <ul className="MOBIL-HAMBURGER-ICERIK flex flex-col items-center justify-between min-h-[250px] lg:flex lg:flex-row lg:justify-start lg:w-[400px]  lg:items-start lg:text-start lg:gap-28 lg:bg-white">
      <ul className="my-8 space-y-4 font-montserrat lg:space-y-8">
        <h4 className="font-bold text-sm text-bgDark border-b lg:border-none">
          Kadın
        </h4>
        <div className="space-y-4 text-bgGray font-semibold text-sm">
          <li>Bags</li>
          <li>Belts</li>
          <li>Cosmetics</li>
          <li>Hats</li>
        </div>
      </ul>
      <ul className="my-8 space-y-4 font-montserrat lg:space-y-8">
        <h4 className="font-bold text-sm text-bgDark  border-b lg:border-none">
          Erkek
        </h4>
        <div className="space-y-4 font-semibold text-bgGray text-sm">
          <li>Bags</li>
          <li>Belts</li>
          <li>Cosmetics</li>
          <li>Hats</li>
        </div>
      </ul>
    </ul>
  );

  return (
    <div className="flex justify-start items-center lg:flex-row  lg:h-[78px] lg:m-0 border">
      <nav className="lg:m-0 lg:w-full lg:flex lg:items-center">
        <div className="flex flex-row  w-screen justify-around items-center lg:w-full lg:justify-around lg:pl-10">
          <span className="font-montserrat text-bgDark text-base font-bold leading-8 lg:text-2xl lg:order-1">
            Bandage
          </span>

          <div className="flex justify-around w-36 lg:order-3 lg:w-96 lg:flex lg:items-center lg:justify-evenly">
            <div className="flex">
              <a
                href=""
                className="hidden lg:block lg:text-center text-sm font-extrabold text-bgBlue font-montserrat"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-bgBlue text-sm mr-2 "
                />
                Login
              </a>
              <span className="hidden lg:block lg:text-center text-sm font-extrabold text-bgBlue font-montserrat lg:px-1">
                /
              </span>

              <a
                href=""
                className="hidden lg:block lg:text-center text-sm font-extrabold text-bgBlue font-montserrat"
              >
                Register
              </a>
            </div>

            <FontAwesomeIcon
              icon={faUser}
              className="lg:text-bgBlue text-base lg:hidden"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="lg:text-bgBlue text-base"
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="lg:text-bgBlue  text-base"
            />
            <FontAwesomeIcon
              icon={faHeart}
              className="hidden lg:block  text-base lg:text-bgBlue"
            />

            <section className="MOBILE-MENU flex  lg:hidden ">
              <div
                className="HAMBURGER-ICON space-y-1 "
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-5  bg-gray-600"></span>
                <span className="block h-0.5 w-4  bg-gray-600 ml-auto"></span>
                <span className="block h-0.5 w-2  bg-gray-600 ml-auto"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="KAPATMA-MENU absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                {<MobileHamburgerContent />}
              </div>
            </section>
          </div>

          <ul className="hidden  text-bgGray lg:flex lg:flex-row  lg:gap-10 lg:items-center  lg:text-l lg:space-y-0 lg:mr-auto lg:ml-48 lg:order-2 ">
            <li>
              <a href="/about">Home</a>
            </li>
            <button
              className="hidden lg:block lg:relative bg-white p-0 focus:outline-none"
              onClick={toggleClick}
              onMouseEnter={toggleClick}
              onMouseLeave={toggleClick}
            >
              Shop <FontAwesomeIcon icon={faAngleDown} />
              {isShopOpen && (
                <div className="absolute w-[400px] flex ">
                  {<MobileHamburgerContent />}
                </div>
              )}
            </button>

            <li>
              <a href="/portfolio">About</a>
            </li>
            <li>
              <a href="/contact">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/contact">Pages</a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col items-center space-y-8 mt-10 text-bgGray text-3xl lg:hidden">
          <li>
            <a href="/about">Home</a>
          </li>
          <button
            className="hidden lg:block bg-white  py-0"
            onClick={toggleClick}
          >
            Shop <FontAwesomeIcon icon={faAngleDown} />
            {isShopOpen && (
              <div className="absolute left-0 w-48">
                {<MobileHamburgerContent />}
              </div>
            )}
          </button>

          <li>
            <a href="/contact">Product</a>
          </li>
          <li>
            <a href="/contact">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarLight;
