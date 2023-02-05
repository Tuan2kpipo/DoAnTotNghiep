import actionTypes from "./actionTypes";
import { apiGetNotifitions } from "../../services/notifition";

export const getNotifitions = () => async (dispatch) => {
  try {
    const response = await apiGetNotifitions();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_NOTIFITIONS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_NOTIFITIONS,
        msg: response.data.msg,
      });
    }
    // console.log(response);
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NOTIFITIONS,
      posts: null,
    });
  }
};
