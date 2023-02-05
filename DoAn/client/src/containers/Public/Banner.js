import React from "react";
import bannerlogo from "../../assets/banner-logo.png";

function Banner() {
  return (
    <div className=" w-full h-120  bg-cover  flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <img className="w-4/5" src={bannerlogo}></img>
    </div>
  );
}

export default Banner;
