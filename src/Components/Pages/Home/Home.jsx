import Banner from "../../Shared/Banner/Banner";
import Beauty from "../../Shared/Beauty/Beauty";
import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Beauty></Beauty>
      <div className="my-14 py-14 bg-pink-50">
        <h1 className="text-center text-6xl font-bold">Choose Your Brands</h1>
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
