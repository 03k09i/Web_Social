import React, { useState } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";
import { loginUserAction } from "../../../store/actions/user.actions";

export default function Login() {
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
        const res = await dispatch(loginUserAction(data));
        if (res?.data?.message) {
          Swal.fire("SUCCESS", res.data.message, "success");
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
      <h2 className="form-box-title">Account Login</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-item">
            <div
              className={
                focusInput === "username" || getValues("username")
                  ? "form-input active"
                  : "form-input"
              }
            >
              <label>Phone or Email</label>
              <input
                type="text"
                name="username"
                {...register("username", { required: true })}
                onFocus={() => setFocusInput("username")}
                onBlur={() => setFocusInput()}
              />
              {showWarning("username")}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-item">
            <div
              className={
                focusInput === "password" || getValues("password")
                  ? "form-input active"
                  : "form-input"
              }
            >
              <label>Password</label>
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
        <div className="form-row space-between">
          <div className="form-item">
            <div className="checkbox-wrap">
              <input
                type="checkbox"
                id="login-remember"
                name="login_remember"
                defaultChecked
              />
              <div className="checkbox-box">
                <svg className="icon-cross">
                  <use xlinkHref="#svg-cross" />
                </svg>
              </div>
              <label htmlFor="login-remember">Remember Me</label>
            </div>
          </div>
          <div className="form-item">
            <a className="form-link" href="/#">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="form-row">
          <div className="form-item">
            <button className="button medium secondary">
              Login to your Account!
            </button>
          </div>
        </div>
      </form>
      <p className="lined-text">Login with your Social Account</p>
      <div className="social-links">
        <a className="social-link facebook" href="/#">
          <svg className="icon-facebook">
            <use xlinkHref="#svg-facebook" />
          </svg>
        </a>
        <a className="social-link twitter" href="/#">
          <svg className="icon-twitter">
            <use xlinkHref="#svg-twitter" />
          </svg>
        </a>
      </div>
    </div>
  );
}
