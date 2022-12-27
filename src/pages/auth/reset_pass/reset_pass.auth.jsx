import React, { useState } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";
import { resetPasswordAction } from "../../../store/actions/user.actions";


export default function ResetPass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        const res = await dispatch(resetPasswordAction(data));
        if (res?.data?.message) {
          Swal.fire("SUCCESS", "Đã đặt lại mật khẩu", "success");
          await navigate("/");
        } else {
          Swal.fire("ERROR", res.message, "error");
        }
      },
    });
  };

  return (
    <div className="form-box login-register-form-element animation-form-auth">
      <img
        className="form-box-decoration overflowing"
        src={"/img/landing/plane.png"}
        alt="rocket"
        style={{ width: 100, height: 100 }}
      />
      <h2 className="form-box-title">Forgot Password</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-item">
            <div
              className={
                focusInput === "email" || getValues("email")
                  ? "form-input active"
                  : "form-input"
              }
            >
              <label>Email address</label>
              <input
                type="text"
                name="email"email
                {...register("email", { required: true })}
                onFocus={() => setFocusInput("email")}
                onBlur={() => setFocusInput()}
              />
              {showWarning("email")}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-item">
            <div
              className={
                focusInput === "phone" || getValues("phone")
                  ? "form-input active"
                  : "form-input"
              }
            >
              <label>Phone number</label>
              <input
                type="text"
                name="phone"
                {...register("phone", { required: true })}
                onFocus={() => setFocusInput("phone")}
                onBlur={() => setFocusInput()}
              />
              {showWarning("phone")}
            </div>
          </div>
        </div>
        <div style={{"marginTop":"40px"}}></div>
        <div className="form-row">
          <div className="form-item">
            <button className="button medium secondary">
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
