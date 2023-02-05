import db from "../models";

// GET ALL PROVINCE
export const getNotifitionSerivce = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Notifition.findAll({
        raw: true,
        attributes: ["title", "content"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Notifition.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
