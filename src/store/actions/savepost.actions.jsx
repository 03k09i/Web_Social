import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import { setListSavePost } from "../reducers/savepost.reducer";

export const addSavePostAction = (id, data, token = Cookies.get("token")) => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(`savepost/`, "POST", data, {
                Authorization: `Bearer ${token}`,
            });
            return res?.data;
        } catch (err) {
            return err;
        }
    };
    return add;
};
export const getSavePostAction = (id, token = Cookies.get("token")) => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(`savepost/`, "GET", "", {
                Authorization: `Bearer ${token}`,
            });
            await dispatch(setListSavePost(res?.data));
            return res;
        } catch (err) {
            return err;
        }
    };
    return add;
};
export const deleteSavePostAction = (id, token = Cookies.get("token")) => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(`savepost/${id}`, "DELETE", "", {
                Authorization: `Bearer ${token}`,
            });
            return res?.data?.data;
        } catch (err) {
            return err;
        }
    };
    return add;
};
