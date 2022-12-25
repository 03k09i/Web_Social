import Cookies from "js-cookie";
import callApi from "../../utils/callApi";

export const searchUserAction = (data, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/search?data=${data}`, "GET", "", {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};
