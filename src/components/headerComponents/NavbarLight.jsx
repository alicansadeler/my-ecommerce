import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const NavbarLight = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleClick = () => {
    setIsShopOpen(!isShopOpen);
  };

  const MobileHamburgerContent = () => (
    <ul className="MOBIL-HAMBURGER-ICERIK flex flex-col items-center justify-between min-h-[250px]">
      <ul className="my-8 space-y-4 font-montserrat">
        <h4 className="border-b font-bold text-sm">Kadın</h4>
        <div className="space-y-4 text-bgGray font-semibold text-sm">
          <li>Bags</li>
          <li>Belts</li>
          <li>Cosmetics</li>
          <li>Hats</li>
        </div>
      </ul>
      <ul className="my-8 space-y-4 font-montserrat">
        <h4 className="border-b font-bold text-sm">Erkek</h4>
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
    <div className="flex items-center justify-around  py-0 lg:flex-row border  ">
      <nav className="border border-red-600 lg:w-full lg:flex">
        <div className="flex flex-row  w-screen justify-around items-center lg:w-full">
          <span className="font-montserrat text-bgDark text-base font-bold leading-8 lg:text-2xl lg:order-1">
            Bandage
          </span>

          <div className="flex justify-around w-36 lg:order-3">
            <FontAwesomeIcon icon={faUser} className="text-bgDark" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-bgDark" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-bgDark" />

            <section className="MOBILE-MENU flex  lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-1"
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

          <ul className="flex flex-col items-center space-y-8 mt-10 text-bgGray text-3xl lg:flex-row lg:justify-around lg:items-center lg:mt-0 lg:text-sm lg:space-y-0 lg:order-2">
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
              <a href="/portfolio">Product</a>
            </li>
            <li>
              <a href="/contact">Pricing</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLight;
