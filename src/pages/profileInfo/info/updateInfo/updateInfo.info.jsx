import React, { useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IoWarningOutline } from "react-icons/io5";
import { updateUserAction } from "../../../../store/actions/user.actions";

export default function UpdateInfo() {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...detailUser,
      birthday: moment(detailUser.birthday).isValid()
        ? moment(detailUser.birthday).format("YYYY-MM-DD")
        : "",
    },
  });
  const [focusInput, setFocusInput] = useState();

  const showWarning = (inputName) => {
    if (errors[inputName]?.type === "required") {
      return (
        <p className="input-warning">
          <IoWarningOutline className="icon-setup-item-chat" />
          {`My ${inputName} is required.`}
        </p>
      );
    }
  };

  const onSubmit = async (data) => {
    Swal.fire({
      title: "Wait a minute",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
        try {
          let result = new FormData();
          await result.append("name", data.name);
          await result.append("birthday", data.birthday);
          await result.append("gender", data.gender);
          await result.append("address", data.address);
          await result.append("job", data.job);
          await dispatch(updateUserAction(result));
        } catch (error) {
          Swal.fire("ERROR", error, "error");
        }
      },
    });
  };

  return (
    <div className="grid-column">
      <div className="widget-box">
        <p className="widget-box-title">Update Profile</p>

        <div className="widget-box-content">
          <form
            className="form"
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: 0 }}
          >
            <div className="form-row">
              <div className="form-item">
                <div
                  className={
                    focusInput === "name" || getValues("name")
                      ? "form-input active"
                      : "form-input"
                  }
                >
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    onFocus={() => setFocusInput("name")}
                    onBlur={() => setFocusInput()}
                  />
                  {showWarning("name")}
                </div>
              </div>
            </div>
            <div className="form-row split">
              <div className="form-item">
                <div className="form-input-decorated">
                  <div className="form-input active">
                    <label>Birthday</label>
                    <input
                      type="date"
                      name="birthday"
                      {...register("birthday")}
                    />
                  </div>
                </div>
              </div>
              <div className="form-item">
                <div className="form-select" style={{ height: 54 }}>
                  <label>Gender</label>
                  <select
                    name="gender"
                    {...register("gender")}
                    defaultValue={0}
                  >
                    <option value={0} disabled>
                      Gender
                    </option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Other</option>
                  </select>
                  <svg className="form-select-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <div
                  className={
                    focusInput === "address" || getValues("address")
                      ? "form-input active"
                      : "form-input"
                  }
                >
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    {...register("address", { required: true })}
                    onFocus={() => setFocusInput("address")}
                    onBlur={() => setFocusInput()}
                  />
                  {showWarning("address")}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <div
                  className={
                    focusInput === "job" || getValues("job")
                      ? "form-input active"
                      : "form-input"
                  }
                >
                  <label>Job</label>
                  <input
                    type="text"
                    name="job"
                    {...register("job", { required: true })}
                    onFocus={() => setFocusInput("job")}
                    onBlur={() => setFocusInput()}
                  />
                  {showWarning("job")}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <button className="button medium primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
