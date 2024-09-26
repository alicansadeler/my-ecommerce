import { data } from "../../data";

export const CarouselHeader = () => {
  const headerData = data.header.headerData;
  return (
    <div
      className="bg-lineer-blue min:w-80 max:h-[900px]
     flex flex-col items-center justify-around gap-10 m-2 rounded-[20px] mt-20 font-montserrat"
    >
      <h2 className="mt-12  text-bgDarkBlue text-base font-bold">
        {headerData.subtitle}
      </h2>
      <h1 className="text-bgDark text-4xl font-bold ">{headerData.title}</h1>
      <p className="text-bgGray text-xl font-normal">{headerData.text}</p>
      <button className="bg-bgBlue text-white text-2xl font-semibold">
        SHOP NOW
      </button>
      <img src={"/col-md-6.png"} alt="" className="object-cover mt-16" />
    </div>
  );
};
