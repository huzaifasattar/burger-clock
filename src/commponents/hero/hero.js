import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="w-full ">
      <div>
        <img
          src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1699651009-Cricket-Craze.jpg&w=3840&q=75"
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1698624000-Wrap-Web-Cover.jpg&w=3840&q=75"
          alt="Slide 2"
        />
      </div>
      <div>
        <img
          src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1700777976-Blessed-Friday-Web-Cover.jpg&w=3840&q=75"
          alt="Slide 3"
        />
      </div>
    </Slider>
  );
};

export default Hero;
