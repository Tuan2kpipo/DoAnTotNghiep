import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, InputForm } from "../../components";
function Contact() {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    content: "",
  });

  const handleSubmit = () => {
    Swal.fire(
      `Cam on ${payload.name ? payload.name : ""}`,
      "Phan hoi cua ban da duoc chung toi ghi nhan",
      "success"
    ).then(() => {
      setPayload({
        name: "",
        phone: "",
        content: "",
      });
    });
  };
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-6">Liên hệ với chúng tôi</h1>

      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-4 h-fit bg-red-400 p-4 rounded-3xl text-white bg-gradient-to-br from-blue-700 to-cyan-400">
          <h4 className="font-medium">Thông tin liên hệ</h4>
          <span>Cam on</span>
        </div>
        {/* <div className="flex-1 bg-white shadow-md rounded-md p-4 mb-6">
          <h4 className="font-medium text-lg mb-4">Lien he truc tiep</h4>
          <div className="flex flex-col gap-6">
            <InputForm
              label="Ho va ten"
              value={payload.name}
              setValue={setPayload}
              keyPayload="name"
            ></InputForm>
            <InputForm
              label="Số điện thoại"
              value={payload.phone}
              setValue={setPayload}
              keyPayload="phone"
            ></InputForm>
            <div>
              <label htmlFor="desc">Noi dung mo ta</label>
              <textarea
                value={payload.content}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, content: e.target.value }))
                }
                keyPayload="content"
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                id="desc"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <Button
              text="Gui lien he"
              bgColor="bg-blue-500"
              textColor="text-white"
              fullWidth
              onClick={handleSubmit}
            ></Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
