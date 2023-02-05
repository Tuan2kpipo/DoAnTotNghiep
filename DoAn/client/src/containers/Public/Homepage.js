import React from "react";
import { Province, ItemSidebar, RelatedPost } from "../../components";
import { text } from "../../untils/constant";
import { List, Pagination } from "./index";

import { useSelector } from "react-redux";

function Homepage() {
  const { categories, prices, areas } = useSelector((state) => state.app);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>

      {/* <Province></Province> */}

      <div className="w-[100%] flex gap-4">
        <div className="w-[70%]">
          <List></List>
          <Pagination></Pagination>
        </div>
        <div className="w-[30%]  flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={categories} title="Danh mục"></ItemSidebar>
          {/* <ItemSidebar content={categories} title="Danh mục"></ItemSidebar> */}

          {/* <ItemSidebar
            // isDouble={true}
            type="priceCode"
            content={prices}
            title="xem theo gia"
          ></ItemSidebar> */}
          {/* <ItemSidebar
            isDouble={true}
            type="areaCode"
            content={areas}
            title="xem theo dien tich"
          ></ItemSidebar> */}
          <RelatedPost></RelatedPost>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
