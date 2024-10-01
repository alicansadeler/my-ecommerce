const Features = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center gap-20 text-center overflow-x-hidden mt-10">
      <div className="flex flex-col items-center flex-wrap gap-2 w-[90%]">
        <h1 className="font-semibold text-lg text-bgGray">Featured Products</h1>
        <h1 className="font-bold text-2xl text-bgDark">THE BEST SERVICES</h1>
        <h4 className="font-semibold text-base text-bgGray">
          Problems trying to resolve the conflict between{" "}
        </h4>
      </div>

      <div className="flex flex-col gap-20 lg:flex-row lg:justify-around lg:gap-40">
        <div className="flex flex-col items-center gap-5 w-[328px]">
          <img src="/home-features/icon1.svg" alt="icon1" />
          <h1 className="font-bold text-2xl text-bgDark">Easy Wins</h1>
          <p className="font-normal text-base text-bgGray">
            Get your best looking smile now!
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 w-[328px]">
          <img src="/home-features/icon2.png" alt="icon2" />
          <h1 className="font-bold text-2xl text-bgDark">Concrete</h1>
          <p className="font-normal text-base text-bgGray">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 w-[328px]">
          <img src="/home-features/icon3.svg" alt="icon3" />
          <h1 className="font-bold text-2xl text-bgDark">Hack Growth</h1>
          <p className="font-normal text-base text-bgGray">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
