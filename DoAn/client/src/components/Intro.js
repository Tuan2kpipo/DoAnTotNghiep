import React, { memo } from "react";
import { text } from "../untils/dataIntro";
import icons from "../untils/icons";
import Button from "./Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../untils/Common/formatVietnameseToString";
import { useNavigate } from "react-router-dom";
const { GrStar } = icons;

const star = [1, 2, 3, 4, 5];

function Intro() {
  const { categories } = useSelector((state) => state.app);
  const navigate = useNavigate();

  return (
    <div className="w-4/5 bg-white rounded-md shadow-md p-4 flex-col flex justify-center items-center">
      <h3 className="font-bold text-lg">{text.title}</h3>
      <p className="text-gray-800  text-center">
        {text.description}
        {/* <span className="text-link">
          {categories?.length > 0 &&
            categories.map((item) => {
              return (
                <Link
                  to={`/${formatVietnameseToString(item.value)}`}
                  key={item.code}
                  className="text-blue-600 font-medium hover:text-orange-600"
                >
                  {`${item.value.toLowerCase()}`}
                </Link>
              );
            })}
        </span> */}

        {text.description2}
      </p>
      <div className="flex items-center justify-around w-full ">
        {text.statistic.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <h4 font-bold text-lg>
                {item.value}
              </h4>
              <p className="text-gray-700">{item.name}</p>
            </div>
          );
        })}
      </div>

      <h3 className="font-bold text-lg py-2">{text.price}</h3>
      <div className="flex items-center justify-center gap-1">
        {star.map((item) => {
          return <span>{<GrStar size={24} color="yellow"></GrStar>}</span>;
        })}
      </div>
      <p className="text-gray-700 italic text-center">{text.comment}</p>
      <span className="text-gray-700">{text.author}</span>
      <h3 className="font-bold text-lg py-2">{text.question}</h3>
      <p>{text.answer}</p>

      <Button
        text="Đăng tin ngay"
        bgColor="bg-secondary2"
        textColor="text-white"
        px="px-6"
        onClick={() => navigate("/he-thong/tao-moi-bai-dang")}
      ></Button>

      <div className="h-12"></div>
    </div>
  );
}

export default memo(Intro);
