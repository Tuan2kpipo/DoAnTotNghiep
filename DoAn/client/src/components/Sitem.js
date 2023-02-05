import React from "react";
import moment from "moment";
import "moment/locale/vi";
import { GrStar } from "react-icons/gr";
function Sitem({ title, price, image, createdAt, star }) {
  const formatTime = (createdAt) => {
    moment.localeData("vn");
    return moment(createdAt).fromNow();
  };

  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++)
      stars.push(<GrStar className="star-item" size={18} color="yellow" />);
    return stars;
  };
  return (
    <div className="w-full flex items-center gap-1 py-2 border-b border-gray-500">
      <img
        src={image[0]}
        alt="anh"
        className="w-[65px] h-[65px] flex-none object-cover rounded-md"
      ></img>
      <div className="flex flex-auto flex-col justify-between gap-1 ">
        <h4 className="text-blue-600 text-[14px]">
          {handleStar(+star).length > 0 &&
            handleStar(+star).map((star, number) => {
              return <span key={number}>{star}</span>;
            })}
          {title}
          {`${title?.slice(0, 50)}...`}
        </h4>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-300">{formatTime(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default Sitem;
