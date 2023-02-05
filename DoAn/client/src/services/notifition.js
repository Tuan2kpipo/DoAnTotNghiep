import axios from "axios";
import axiosConfig from "../axiosConfig";

export const apiGetNotifitions = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/notifition/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
