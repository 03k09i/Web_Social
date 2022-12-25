import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IoWarningOutline } from "react-icons/io5";
import UpLoadImage from "../../../components/upLoadImage/upLoadImage.component";
import { registerUserAction } from "../../../store/actions/user.actions";

export default function Register() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [focusInput, setFocusInput] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU",
  );

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
          await result.append("email", data.email);
          await result.append("phone", data.phone);
          await result.append("birthday", data.birthday);
          await result.append("gender", data.gender);
          await result.append("password", data.password);
          await result.append("avatar", file);
          await dispatch(registerUserAction(result));
        } catch (error) {
          Swal.fire("ERROR", error, "error");
        }
      },
    });
  };

  return (
    <div
      className="form-box login-register-form-element animation-form-auth"
      style={{ padding: 50 }}
    >
      <img
        className="form-box-decoration"
        src={"/img/landing/plane.png"}
        alt="rocket"
        style={{ width: 100, height: 100 }}
      />
      <h2 className="form-box-title">Create your Account!</h2>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          margin: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
          }}
        >
          <img
            src={image}
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              width: 100,
              height: 100,
            }}
            alt="#"
          ></img>
          <UpLoadImage setImage={setImage} setFile={setFile} />
        </div>
      </div>
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
        <div className="form-row split mt-20">
          <div className="form-item">
            <div className="form-input-decorated">
              <div className="form-input active">
                <label>Birthday</label>
                <input type="date" name="birthday" {...register("birthday")} />
              </div>
            </div>
          </div>
          <div className="form-item">
            <div className="form-select" style={{ height: 54 }}>
              <label>Gender</label>
              <select name="gender" {...register("gender")} defaultValue={0}>
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
        <div className="form-row mt-20">
          <div className="form-item">
            <div
              className={
                focusInput === "email" || getValues("email")
                  ? "form-input active"
                  : "form-input"
              }
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                onFocus={() => setFocusInput("email")}
                onBlur={() => setFocusInput()}
              />
              {showWarning("email")}
            </div>
          </div>
        </div>
        <div className="form-row mt-20">
          <div className="form-item">
            <div
              className={
                focusInput === "phone" || getValues("phone")
                  ? "form-input active"
                  : "form-input"
              }
            >
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                maxLength={10}
                {...register("phone", { required: true })}
                onFocus={() => setFocusInput("phone")}
                onBlur={() => setFocusInput()}
              />
              {showWarning("phone")}
            </div>
          </div>
        </div>
        <div className="form-row mt-20">
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
        <div className="form-row mt-20">
          <div className="form-item">
            <button className="button medium primary">Register Now!</button>
          </div>
        </div>
      </form>
    </div>
  );
}
