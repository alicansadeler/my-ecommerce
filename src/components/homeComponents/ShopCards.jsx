const ShopCards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto  overflow-hidden px-4 font-montserrat font-semibold">
      <div className="w-full mb-4 flex flex-col items-center">
        <div className="w-full min-h-[556px] h-auto relative">
          <img
            src="/shop-cards/shop1.png"
            alt="Shop card 1"
            className="w-full min-h-[556px] h-auto object-cover"
          />
          <div className="flex flex-col items-center justify-around bg-bgLightBlue bg-opacity-50 text-white p-4 w-full h-[calc(100%/2.5)] absolute bottom-0 left-0 text-left">
            <div className="space-y-10">
              <p className="text-2xl w-[calc(100%/1.5)]">
                Top Product Of the Week
              </p>
              <button className="text-base bg-transparent border border-white">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="w-full mb-4 flex flex-col items-center">
          <div className="w-full min-h-[400px] h-auto relative">
            <img
              src="/shop-cards/shop2.jpg"
              alt="Shop card 1"
              className="w-full min-h-[400px] h-auto object-cover"
            />
            <div className="flex flex-col items-center justify-around bg-bgLightBlue bg-opacity-50 text-white p-4 w-full h-[calc(100%/2.5)] absolute bottom-0 left-0 text-left">
              <div className="space-y-10">
                <p className="text-2xl w-[calc(100%/1.5)]">
                  Top Product Of the Week
                </p>
                <button className="text-base bg-transparent border border-white">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-4 flex flex-col items-center">
          <div className="w-full min-h-[400px] h-auto relative">
            <img
              src="/shop-cards/sop3.jpg"
              alt="Shop card 1"
              className="w-full min-h-[400px] h-auto object-cover"
            />
            <div className="flex flex-col items-center justify-around bg-bgLightBlue bg-opacity-50 text-white p-4 w-full h-[calc(100%/2.5)] absolute bottom-0 left-0 text-left">
              <div className="space-y-10">
                <p className="text-2xl w-[calc(100%/1.5)]">
                  Top Product Of the Week
                </p>
                <button className="text-base bg-transparent border border-white">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
