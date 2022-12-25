import Cookies from "js-cookie";
import callApi from "../../utils/callApi";

export const reactPostAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`post/react/${id}`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const reactCommentAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`comment/react/${id}`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};
