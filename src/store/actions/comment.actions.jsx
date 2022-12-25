import Cookies from "js-cookie";
import callApi from "../../utils/callApi";

export const commentPostAction = (id, data, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`comment/${id}`, "POST", data, {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const getListCommentAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`comment/bypost/${id}`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const deleteCommentAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`comment/${id}`, "DELETE", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};
