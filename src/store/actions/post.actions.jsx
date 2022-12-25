import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import { setListPost } from "../reducers/post.reducer";
import { checkError } from "./showAlert.actions";

export const postNewsfeedAction = (data, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`post`, "POST", data, {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(checkError(res));
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const getListPostAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`post`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(setListPost(res?.data));
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};
