import { data } from "../../data";

export const CarouselHeader = () => {
  const headerData = data.header.headerData;
  return (
    <>
      <div className="bg-lineer-blue  flex flex-col items-center justify-around gap-10 m-2 rounded-[20px] mt-20 font-montserrat lg:mx-16 lg:mt-10 lg:flex-row lg:text-left lg:justify-around lg:overflow-visible">
        <div className="px-8 space-y-8  lg:w-[420px]">
          <h2 className="mt-12  text-bgDarkBlue text-base font-bold ">
            {headerData.subtitle}
          </h2>
          <h1 className="text-bgDark text-4xl font-bold ">
            {headerData.title}
          </h1>
          <p className="text-bgGray text-xl  font-medium">{headerData.text}</p>
          <button className="bg-bgBlue text-white text-2xl font-bold">
            SHOP NOW
          </button>
        </div>
        <div>
          <img
            src={"/col-md-6.png"}
            alt=""
            className="object-cover mt-16 lg:mt-0 lg:relative lg:left-16 2xl:left-48 2xl:h-[700px]"
          />
        </div>
      </div>
    </>
  );
};
