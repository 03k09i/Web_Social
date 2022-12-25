import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import { getListChannel } from "../reducers/channel.reducer";

export const getChannelAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`channel/${id}`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const getListChannelAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`channel/get/mylist`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(getListChannel(res.data));
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const addChannelAction = (data, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`channel/create`, "POST", data, {
        Authorization: `Bearer ${token}`,
      });
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};
