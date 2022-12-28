import Cookies from "js-cookie";
import callApi from "../../utils/callApi";
import { setListShortCut } from "../reducers/shortcut.reducer";

export const addShortCutAction = ( data, token = Cookies.get("token")) => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(`shortcut/`, "POST", data, {
                Authorization: `Bearer ${token}`,
            });
            return res?.data;
        } catch (err) {
            return err;
        }
    };
    return add;
};
export const getShortCutAction = ( token = Cookies.get("token")) => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(`shortcut/`, "GET", "", {
                Authorization: `Bearer ${token}`,
            });
            await dispatch(setListShortCut(res?.data));
            return res?.data?.shortcut;
        } catch (err) {
            return err;
        }
    };
    return add;
};
export const deleteShortCutAction = (id, token = Cookies.get("token")) => {
    const add = async (dispatch) => {
        try {
            const res = await callApi(`shortcut/${id}`, "DELETE", "", {
                Authorization: `Bearer ${token}`,
            });
            return res?.data;
        } catch (err) {
            return err;
        }
    };
    return add;
};
