import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import { getListNotify } from "../reducers/notify.reducer";

export const getNotifyAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`notify`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      console.log(res);
      await dispatch(getListNotify(res?.data));
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const addNotifyAction = (data, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`notify`, "POST", data, {
        Authorization: `Bearer ${token}`,
      });
      console.log(res, 88);
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};
