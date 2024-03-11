/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  console.log(brand);
  return (
    <div className="card mx-auto w-52 md:w-44 mt-10 h-48 bg-slate-100 shadow-xl">
      <figure className="h-52 md:w-44">
        <img className="w-48 md:w-40 m-2" src={brand.logo} alt="Shoes" />
      </figure>
    </div>
  );
};

export default Brand;
