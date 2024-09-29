const Brands = () => {
  const brands = [
    { id: 1, src: "/clients-logo/brands1.png" },
    { id: 2, src: "/clients-logo/brands2.png" },
    { id: 3, src: "/clients-logo/brands3.png" },
    { id: 4, src: "/clients-logo/brands4.png" },
    { id: 5, src: "/clients-logo/brands5.png" },
    { id: 6, src: "/clients-logo/brands6.png" },
  ];

  return (
    <div className="flex flex-col items-center gap-16 justify-center overflow-hidden lg:flex-row">
      {brands.map((brand) => (
        <img key={brand.id} src={brand.src} alt={`Brand ${brand.id}`} />
      ))}
    </div>
  );
};

export default Brands;
