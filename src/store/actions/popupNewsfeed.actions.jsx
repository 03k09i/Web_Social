import {
  onPopupNewsfeed,
  offPopupNewsfeed,
} from "../reducers/popupNewsfeed.reducer";

export const onPopupNewsfeedAtion = () => {
  const add = async (dispatch) => {
    try {
      dispatch(onPopupNewsfeed());
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};

export const offPopupNewsfeedAtion = () => {
  const add = async (dispatch) => {
    try {
      dispatch(offPopupNewsfeed());
    } catch (err) {
      console.log(err);
    }
  };
  return add;
};
