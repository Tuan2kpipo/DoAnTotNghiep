import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { Button, UpdatePost } from "../../components";
import { apiDeletePost } from "../../services";
import Swal from "sweetalert2";
import { apiGetCurrent } from "../../services";

function ManagePost() {
  const formatdate = "DD/MM/YYYY";
  const dispach = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { postOfCurrent, dataEdit } = useSelector((state) => state.post);
  const { updateData, setUpdateData } = useState(false);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("0");
  const { currentData } = useSelector((state) => state.user);

  // console.log("postcurrent", postOfCurrent);
  useEffect(() => {
    if (currentData?.id?.match(/\d/g).join("")?.slice(0, 6) === "190829") {
      !dataEdit && dispach(actions.getPostsLimitAdmin());
    } else {
      !dataEdit && dispach(actions.getPostsLimitNotAdmin());
    }
  }, [dataEdit, updateData]);

  useEffect(() => {
    setPosts(postOfCurrent);
  }, [postOfCurrent]);

  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);

  const checkStatus = (dateString) =>
    moment(dateString, formatdate).isSameOrAfter(new Date().toDateString());

  console.log(checkStatus("2/10/2022"));

  const handleDeletePost = async (postId) => {
    const response = await apiDeletePost(postId);
    console.log(response);
    if (response?.data.err === 0) {
      dispach(actions.getPostsLimitNotAdmin());
    } else {
      Swal.fire("Oops!", "xoa tin that bai", "error");
    }
  };

  useEffect(() => {
    if (status === 1) {
      const activePost = postOfCurrent?.filter((item) =>
        checkStatus(item?.overviews?.expired?.split(" ")[3])
      );
      setPosts(activePost);
    } else if (status === 2) {
      const expiredPost = postOfCurrent?.filter(
        (item) => !checkStatus(item?.overviews?.expired?.split(" ")[3])
      );
      setPosts(expiredPost);
    } else {
      setPosts(postOfCurrent);
    }
  }, [status]);
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium ">Quản lý tin đăng</h1>
        <select
          onChange={(e) => setStatus(+e.target.value)}
          value={status}
          className="outline-none border  border-gray-200 rounded-md"
        >
          <option value="0"> Lọc theo tin đăng</option>
          <option value="1"> Dang hoat dong</option>
          <option value="2"> Da het han</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-blue">
            <th className="border flex-1 p-2 ">Mã tin </th>
            <th className="border flex-1 p-2 ">Ảnh </th>
            <th className="border flex-1 p-2 ">Tiêu đề </th>
            <th className="border flex-1 p-2 ">Giá </th>
            <th className="border flex-1 p-2">Ngày bắt đầu </th>
            <th className="border flex-1 p-2">Ngày hết hạn </th>
            <th className="border flex-1 p-2 ">Trạng thái </th>
            <th className="border flex-1 p-2 ">Tùy chọn </th>
          </tr>
        </thead>
        <tbody>
          {!posts ? (
            <tr>
              <td>Ban chua co tin dang</td>
            </tr>
          ) : (
            posts?.map((item) => {
              return (
                <tr key={item.id} className="flex item-center h-16">
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.overviews?.code}
                  </td>

                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    <img
                      src={JSON.parse(item?.images?.image)[0] || ""}
                      alt="avate-post"
                      className="w-10 h-10 object-cover rounded-md"
                    ></img>
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {`${item?.title?.slice(0, 40)}...`}
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.attributes?.price}
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.overviews?.created}
                  </td>

                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.overviews?.expired}
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {checkStatus(item?.overviews?.expired?.split(" ")[3])
                      ? "Đang hoạt động"
                      : "Đã hết hạn"}
                  </td>

                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center gap-4">
                    <Button
                      onClick={() => {
                        dispach(actions.editData(item));
                        setIsEdit(true);
                      }}
                      text="Sửa"
                    ></Button>

                    <Button
                      text="Xóa"
                      onClick={() => handleDeletePost(item.id)}
                    ></Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {isEdit && <UpdatePost setIsEdit={setIsEdit}></UpdatePost>}
    </div>
  );
}

export default ManagePost;
