import React, { memo } from "react";
import anonAvatar from "../assets/anon-avatar.png";
import icons from "../untils/icons";
const { BsDot, BsTelephoneFill, SiZalo } = icons;
function BoxInfo({ userData }) {
  return (
    <div className="w-full bg-yellow-600 rounded-md flex flex-col items-center p-4 gap-4">
      <img
        src={anonAvatar}
        alt="avatar"
        className="w-16 h-16 object-contain rounded-full"
      ></img>
      <h3 className="font-medium text-xl">{userData?.name}</h3>
      <span className="flex items-center">
        <BsDot color="green" size="24"></BsDot>
        <span>Đang hoạt động</span>
      </span>

      <a
        className="bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-lg"
        href={`tel:${userData?.phone}`}
      >
        <BsTelephoneFill />
        {userData?.phone}
      </a>

      <a
        className="bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md  font-bold text-lg"
        href={`http://zalo.me/${userData?.zalo}`}
      >
        <SiZalo color="blue" size={35} />
      </a>
    </div>
  );
}

export default memo(BoxInfo);
