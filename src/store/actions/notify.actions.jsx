import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import { getListNotify } from "../reducers/notify.reducer";

export const getNotifyAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`notify`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
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
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};
