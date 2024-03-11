import { useEffect, useState } from "react";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import banner4 from "../../../assets/images/banner4.jpg";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(banner1);
  const banners = [banner1, banner2, banner3, banner4];

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through banners
      const nextIndex = (banners.indexOf(currentBanner) + 1) % banners.length;
      setCurrentBanner(banners[nextIndex]);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentBanner, banners]);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${currentBanner})` }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md   text-slate-800">
            <h1
              className="mb-5 text-6xl text-center font-bold "
              style={{
                background:
                  "linear-gradient(to right, #4F46E5, #8257E5, #E055A3)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Polish & Posh
            </h1>
            <p className="mb-5 text-lg font-semibold text-justify text-slate-600">
              Elevate your beauty with luxurious cosmetics. Discover
              sophisticated hues and embrace posh elegance effortlessly. Shine
              confidently today
            </p>
            <button className="btn btn-primary border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
