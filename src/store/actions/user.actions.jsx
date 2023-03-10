import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import { setInfoUser, setSuggestion,setAllUser } from "../reducers/user.reducer";
import { checkError } from "./showAlert.actions";

export const loginUserAction = (data) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`auth/login`, "POST", data);
      if (res?.data?.user) {
        await Cookies.set("token", res.data.access_token, { expires: 1 });
        await Cookies.set("_id", res.data.user._id, { expires: 1 });
        await dispatch(getInfoUserAction(res.data.access_token));
      }
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const registerUserAction = (data) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`auth/register`, "POST", data);
      await dispatch(checkError(res));
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const resetPasswordAction = (data) => {
  const add = async (dispatch) => {
    try {
      console.log(data);
      const res = await callApi(`auth/resetpass`, "POST", data);
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const updateUserAction = (data, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/update`, "PATCH", data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      console.log(res?.data);
      if (res?.data?.message) {
        await dispatch(getInfoUserAction());
      }
      await dispatch(checkError(res));
      return res;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const changePassUserAction = (data, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`auth/changepass`, "PATCH", data, {
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

export const getInfoUserAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/getinfo`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      if (res?.data) {
        await dispatch(setInfoUser(res.data.data));
      } else {
        if (token) {
          await dispatch(checkError(res));
        }
      }
      return res?.data?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const getImageUserAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/listimage/${id}`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const getInfoFriendAction = (id, token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/get/${id}`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      return res?.data;
    } catch (err) {
      return err;
    }
  };
  return add;
};

export const getSuggestionAction = (token = Cookies.get("token")) => {
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/suggestion?num=10`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(setSuggestion(res.data.user1));
      return res?.data?.user1;

    } catch (err) {
      return err;
    }
  };
  return add;
}

export const getAllUserAction=(token = Cookies.get("token"))=>{
  const add = async (dispatch) => {
    try {
      const res = await callApi(`user/not/friend`, "GET", "", {
        Authorization: `Bearer ${token}`,
      });
      await dispatch(setAllUser(res.data.user));
      return res?.data?.user;

    } catch (err) {
      return err;
    }
  };
  return add;
}
