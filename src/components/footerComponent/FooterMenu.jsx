import React from "react";

const FooterMenu = () => {
  const menuItems = [
    {
      title: "Company Info",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      items: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <div className="flex flex-col w-full text-left space-y-6  font-montserrat lg:flex-row lg:justify-around lg:space-y-0 pl-10 lg:pl-0">
      {menuItems.map((section, index) => (
        <div key={index} className="space-y-2 ">
          <h3 className="font-bold text-bgDark text-base">{section.title}</h3>
          <ul className="space-y-2 text-sm font-semibold text-bgGray">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="space-y-2 flex flex-col ">
        <h3 className="font-bold text-bgDark text-base">Get In Touch</h3>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded bg-bgFooterGray"
          />
          <button
            type="submit"
            className="bg-blue-500 p-4 text-white  rounded font-semibold"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm font-semibold text-bgGray">
          Lorem ipsum dolor amet
        </p>
      </div>
    </div>
  );
};

export default FooterMenu;
