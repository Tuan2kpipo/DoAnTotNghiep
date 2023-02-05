import React from "react";
import { CreatePost } from "../containers/System";
function UpdatePost({ setIsEdit }) {
  return (
    <div
      className="absolute top-0 left-0 bottom-0 right-0 bg-overlay-70 flex justify-center "
      onClick={(e) => {
        e.stopPropagation();
        setIsEdit(false);
      }}
    >
      <div
        className="bg-white max-w-1100 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <CreatePost isEdit></CreatePost>
      </div>
    </div>
  );
}

export default UpdatePost;
