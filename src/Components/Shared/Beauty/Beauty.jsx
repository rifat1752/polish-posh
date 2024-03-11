import beauty1 from "../../../assets/images/Frame 125.png";
import beauty2 from "../../../assets/images/Untitled-1.png";
import logo from "../../../assets/images/D.png";

const Beauty = () => {
  return (
    <div className="py-20 ">
      <div className=" ">
        <figure className="w-20 mx-auto  py-5 h-20">
          <img className="w-20 h-20" src={logo} alt="" />
        </figure>
        <h1 className="py-5 text-5xl text-center font-bold text-slate-600">
          Beauty is part of the privilege of women
        </h1>
      </div>
      <div className="grid my-10 grid-cols-1 md:grid-cols-2">
        {/* part 1 */}
        <div className="lg:w-[400px] w-80 mx-auto p-5 flex flex-col-reverse justify-around items-center md:flex-col">
          <div className="lg:w-96 w-80">
            <img className="lg:w-96 w-80" src={beauty1} alt="" />
          </div>
          <div className="lg:w-96 w-80 mb-10 md:mb-0  mt-0 md:mt-10">
            <p className="text-3xl mb-5 text-slate-600 font-extrabold">01</p>
            <p className="text-base text-slate-600  font-semibold">
              Brand can last for 24 hours to keep your skin white. use brand
              regularly to get white skin
            </p>
          </div>
        </div>
        {/* part 2 */}
        <div className="lg:w-[400px] w-80 p-5 mt-10 md:mt-0  flex mx-auto flex-col-reverse justify-around items-center">
          <div className="lg:w-96 w-80 ">
            <img className="lg:w-96 w-80" src={beauty2} alt="" />
          </div>
          <div className="lg:w-96 w-80 mb-10 ">
            <p className="text-3xl mb-5 text-slate-600 font-extrabold">02</p>
            <p className="text-base  text-slate-600 font-semibold">
              Consumption of skinseed products to maintain skin moisture from
              the sun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
