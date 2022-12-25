import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IoWarningOutline } from "react-icons/io5";
import { changePassUserAction } from "../../../../store/actions/user.actions";

export default function ChangePass() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

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
        await dispatch(changePassUserAction(data));
      },
    });
  };

  return (
    <div className="grid-column">
      <div className="widget-box">
        <p className="widget-box-title">Change Password</p>

        <div className="widget-box-content">
          <form
            className="form"
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: 0 }}
          >
            <div className="form-row mt-20">
              <div className="form-item">
                <div
                  className={
                    focusInput === "password" || getValues("password")
                      ? "form-input active"
                      : "form-input"
                  }
                >
                  <label>Old Password</label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", { required: true })}
                    onFocus={() => setFocusInput("password")}
                    onBlur={() => setFocusInput()}
                  />
                  {showWarning("password")}
                </div>
              </div>
            </div>
            <div className="form-row mt-20">
              <div className="form-item">
                <div
                  className={
                    focusInput === "newpassword" || getValues("newpassword")
                      ? "form-input active"
                      : "form-input"
                  }
                >
                  <label>New Password</label>
                  <input
                    type="password"
                    name="newpassword"
                    {...register("newpassword", { required: true })}
                    onFocus={() => setFocusInput("newpassword")}
                    onBlur={() => setFocusInput()}
                  />
                  {showWarning("newpassword")}
                </div>
              </div>
            </div>
            <div className="form-row mt-20">
              <div className="form-item">
                <div
                  className={
                    focusInput === "renewpassword" || getValues("renewpassword")
                      ? "form-input active"
                      : "form-input"
                  }
                >
                  <label>Re-enter New Password</label>
                  <input
                    type="password"
                    name="renewpassword"
                    {...register("renewpassword", { required: true })}
                    onFocus={() => setFocusInput("renewpassword")}
                    onBlur={() => setFocusInput()}
                  />
                  {showWarning("renewpassword")}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <button className="button medium primary">Change pass</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
