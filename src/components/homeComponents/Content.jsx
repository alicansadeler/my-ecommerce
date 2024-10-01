const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10  overflow-x-hidden w-full lg:flex-row lg:justify-center lg:items-center lg:max-w-[1050px] ">
      <div className="w-[70%] text-left font-montserrat lg:order-2 lg:ml-10">
        <h3 className="text-bgBlue font-bold text-base">Featured Products</h3>
        <br />
        <h1 className="text-bgDark text-4xl font-bold">We love what we do</h1>
        <br />
        <p className="text-bgGray text-[14px] font-semibold">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
          <br />
          <br />
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <img
        src={"/col-md-5.png"}
        alt="content png"
        className="w-[80%] object-cover  m-0 p-0 lg:w-1/3 lg:order-1"
      />
    </div>
  );
};

export default Content;
