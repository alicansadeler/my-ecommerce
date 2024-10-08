import React from "react";

const ShopCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto p-2 ">
      <div className="w-full md:w-full  relative overflow-hidden lg:w-[611px] lg:h-[594px]">
        <img
          src={"/shop-cards/shop1.png"}
          alt="Product 1"
          className="w-[345px] h-[556px] lg:w-full lg:h-full object-cover"
        />
        <div className="absolute bottom-0 left-0  h-1/3 lg:w-2/3 bg-bgLightBlue bg-opacity-80 text-white p-10 flex items-start flex-col justify-center gap-4">
          <h3 className="text-lg font-semibold mb-2 ">
            Top Product Of the Week
          </h3>
          <button className="bg-transparent border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-500 transition-colors ">
            EXPLORE ITEMS
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-between">
        <div className="relative overflow-hidden ">
          <img
            src={"/shop-cards/shop2.jpg"}
            alt="Product 2"
            className="w-full h-full object-cover lg:w-[557px] lg:h-[289px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 lg:h-2/3 lg:w-2/3  bg-bgLightBlue bg-opacity-80 text-white p-10 flex items-start flex-col justify-center gap-4">
            <h3 className="text-lg font-semibold mb-2">
              Top Product Of the Week
            </h3>
            <button className="bg-transparent border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-500 transition-colors">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <img
            src={"/shop-cards/sop3.jpg"}
            alt="Product 3"
            className="w-full h-full object-cover lg:w-[557px] lg:h-[289px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 lg:h-2/3 lg:w-2/3 bg-bgLightBlue bg-opacity-80 text-white p-10 flex items-start flex-col justify-center gap-4">
            <h3 className="text-lg font-semibold mb-2">
              Top Product Of the Week
            </h3>
            <button className="bg-transparent border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-500 transition-colors">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
