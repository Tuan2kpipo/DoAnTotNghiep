import actionTypes from "../actions/actionTypes";
const initState = {
  notifitions: [],
  msg: "",
  count: 0,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOTIFITIONS:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
        count: action.count || 0,
      };

    default:
      return state;
  }
};

export default postReducer;
