import React from "react";
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./login/login.auth";
import Register from "./register/register.auth";
import ResetPass from "./reset_pass/reset_pass.auth";

export default function Auth() {
  const { pathname } = useLocation();
  return (
    <div className="landing">
      <div className="landing-decoration" />
      <div className="landing-info">
        <h2 className="landing-info-pretitle">Welcome to</h2>
        <h1 className="landing-info-title">CK</h1>
        <p className="landing-info-text">
          CK helps you connect and share with the people in your life.
        </p>
        <div className="tab-switch">
          <NavLink
            className={
              pathname === "/auth/login"
                ? "tab-switch-button login-register-form-trigger active"
                : "tab-switch-button login-register-form-trigger"
            }
            to={"login"}
          >
            Login
            
          </NavLink>
          <NavLink
            className={
              pathname === "/auth/register"
                ? "tab-switch-button login-register-form-trigger active"
                : "tab-switch-button login-register-form-trigger"
            }
            to={"register"}
          >
            Register
          </NavLink>
        </div>
      </div>
      <div className="landing-form">
        <Routes>
          <Route path="/" element={<Navigate replace to={"login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpass" element={<ResetPass />} />
        </Routes>
      </div>
    </div>
  );
}
