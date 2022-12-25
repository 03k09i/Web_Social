import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import {
  getListFriend,
  getListFriendRequest,
} from "../reducers/friend.reducer";
import { checkError } from "./showAlert.actions";

export const getListFriendRequestAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`request/list`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      if (res?.data) {
        await dispatch(getListFriendRequest(res.data));
      }
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const getListFriendAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/getfiend`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      if (res?.data) {
        await dispatch(getListFriend(res.data));
      }
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const addFriendAction = (recever_id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(
        `request/send`,
        "POST",
        { recever_id },
        {
          Authorization: `Bearer ${token}`,
        },
      );
      await dispatch(getListFriendRequestAction());
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const acceptFriendAction = (
  recever_id,
  token = Cookies.get("token"),
) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`request/accept/${recever_id}`, "PATCH", "", {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(getListFriendRequestAction());
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const cancelFriendAction = (
  recever_id,
  token = Cookies.get("token"),
) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`request/cancel/${recever_id}`, "DELETE", "", {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(getListFriendRequestAction());
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const rejectFriendAction = (
  recever_id,
  token = Cookies.get("token"),
) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`request/reject/${recever_id}`, "DELETE", "", {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(getListFriendRequestAction());
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};
