import Cookies from "js-cookie";
import callApi from "../../utils/callApi";

export const getMessageAction = (id, page, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(
        `message/channel/${id}?page=${page}&limit=50`,
        "GET",
        "",
        {
          Authorization: `Bearer ${token}`,
        },
      );
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const sendMessageAction = (
  id,
  body,
  file,
  token = Cookies.get("token"),
) => {
  const add = async (dispatch) => {
    try {
      let result = new FormData();
      await result.append("content", body);
      await result.append("file", file);
      const res = await callApi(`message/send/${id}`, "POST", result, {
        Authorization: `Bearer ${token}`,
      });
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const readMessageAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`message/read/${id}`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const deleteMessageAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`message/delete/${id}`, "PATCH", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const removeMessageAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`message/remove/${id}`, "PATCH", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};
