import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Sample crop images
const cropImages = [
    "https://th.bing.com/th/id/OIP.wqV8o3I8brJGhoVoGBcS9QHaEK?rs=1&pid=ImgDetMain",
    "https://www.thedailymeal.com/img/gallery/types-of-rice-and-how-to-cook-them/l-intro-1676410300.jpg",
  "https://www.thespruceeats.com/thmb/28fJx6Dpf6MGEaC66NH2txGOi9M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-mustard-seeds----indian-spices-on-wooden-spoon--macro--911766480-71fd9cf103db41158be06d244f16b496.jpg",
  "https://telugu.cdn.zeenews.com/telugu/sites/default/files/2022/06/04/233556-corn-benefits.jpg",

];

// Sample sliding text
const slidingText = [
  "Welcome to KrishiConnect",
  "Grow Your Crops Smartly",
  "Empowering Farmers",
  "Boost Your Yield",
];

const LandingPage = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center p-5">
      {/* Sliding Text Row */}
      <div className="w-full mb-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
        >
          {slidingText.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="text-center text-2xl font-semibold text-green-700">
                {text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Crop Image Slider */}
      <div className="w-full mb-12">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000,}}
          modules={[Autoplay]}
        >
          {cropImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Crop ${index}`}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Feature 1: Crop Advisor */}
        <Link to="/home"className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Crop Advisor</h2>
          <p>
            Get expert advice on crop selection, soil health, and best practices
            for maximizing yield.
          </p>
        </Link>

        {/* Feature 2: Crop Disease Detection */}
        <Link to={"https://vivek-kishor-ml-plant-disease-main-llfims.streamlit.app/"} className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Crop Disease Detection</h2>
          <p>
            Use AI to detect crop diseases early and take action before they
            spread.
          </p>
        </Link>

        {/* Feature 3: Buy/Sell Crops */}
        <Link to={"/login"} className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Buy/Sell Crops</h2>
          <p>
            Connect with buyers and sellers for fresh produce, seeds, and
            agricultural products.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
