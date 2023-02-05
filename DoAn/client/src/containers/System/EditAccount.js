import React, { useState } from "react";
import { InputReadOnly, InputFormV2, Button } from "../../components";
import anonAvatar from "../../assets/anon-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { apiUpdateUser } from "../../services";
import { fileToBase64, blobToBase64 } from "../../untils/Common/tobase64";
import { getCurrent } from "../../store/actions";
import Swal from "sweetalert2";
function EditAccount() {
  const { currentData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    name: currentData?.name || "",
    avatar: blobToBase64(currentData?.avatar) || "",
    fbUrl: currentData?.fbUrl || "",
    zalo: currentData?.zalo || "",
  });

  console.log(payload);

  const handleUploadFile = async (e) => {
    const imageBase64 = await fileToBase64(e.target.files[0]);

    setPayload((prev) => ({
      ...prev,
      avatar: imageBase64,
    }));

    console.log(imageBase64);
  };

  const handleSubmit = async () => {
    const response = await apiUpdateUser(payload);
    if (response?.data.err === 0) {
      Swal.fire(
        "Done",
        "Chinh sua thong tin ca nhan thanh cong",
        "success"
      ).then(() => {
        dispatch(getCurrent());
      });
    } else {
      Swal.fire("Oops!", "Chinh sua thong tin khong thanh cong", "error");
    }
  };
  return (
    <div className="flex flex-col h-full items-center">
      <h1 className="text-3xl w-full text-start font-medium py-4  flex-none border-b border-gray-200">
        Sửa thông tin cá nhân
      </h1>
      <div className="w-3/5 flex items-center justify-center">
        <div className=" border py-6 flex flex-col gap-4 w-full">
          <InputReadOnly
            value={
              `#${currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}` || ""
            }
            direction="flex-row"
            label="Mã thành viên"
          ></InputReadOnly>
          <InputReadOnly
            value={currentData?.phone}
            editPhone
            direction="flex-row"
            label="Số điện thoại"
          ></InputReadOnly>

          <InputFormV2
            name="name"
            setValue={setPayload}
            value={payload.name}
            direction="flex-row"
            label="Tên hiển thị"
          ></InputFormV2>

          <InputFormV2
            name="zalo"
            setValue={setPayload}
            value={payload.zalo}
            direction="flex-row"
            label="Zalo"
          ></InputFormV2>
          <InputFormV2
            name="fbUrl"
            setValue={setPayload}
            value={payload.fbUrl}
            direction="flex-row"
            label="FaceBook"
          ></InputFormV2>

          <div className="flex">
            <label className="w-48 flex-none" htmlFor="password">
              Mật khẩu
            </label>
            <small className="flex-auto text-blue-500 h-12 cursor-pointer">
              Doi mat khau
            </small>
          </div>

          <div className="flex mb-6">
            <label className="w-48 flex-none" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <div>
              <img
                src={payload.avatar || anonAvatar}
                alt="avt"
                className="w-28 h-28 rounded-full object-cover"
              ></img>

              <input
                type="file"
                name=""
                id="avatar"
                className="appearance-none my-4"
                onChange={handleUploadFile}
              ></input>
            </div>
          </div>

          <Button
            text="Cap nhat"
            bgColor="bg-blue-600"
            textColor="text-white"
            onClick={handleSubmit}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default EditAccount;
