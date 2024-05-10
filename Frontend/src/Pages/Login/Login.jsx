import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/Input/Input";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleLogin() {
    setIsLoading(true);
    if (!email) {
      alert("Email is required");
    }
    if (!password) {
      alert("Password is required");
    }
    let formData = new FormData();
    formData.append("identification", identity);
    formData.append("password", password);

    setTimeout(() => {
      axios
        .post("http://localhost:3000/api/v1/user/login", formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          setError("");
          setIsLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.response.data.message);
        });
    }, 3000);
  }
  return (
    <>
      {isLoading ? <Loader /> : null}

      <div className="login_Container">
        <div className="left_content">
          <div className="inner_content">
            <div className="back_button">
              <Button
                text={"◀ Go Back"}
                key={"back"}
                width={100}
                borderRadius={3}
                fontSize="14px"
              />
            </div>
            <br />
            <div className="content">
              <h2>Co-Share</h2>
              <p>Welcome to Co-share</p>
              <p>
                <b>Co-share</b> is a collaborative sharing platform designed to
                connect users worldwide through the exchange of files, ideas,
                and expertise. Whether you're a creative professional, a
                student, or an enthusiast, our platform provides a space where
                you can easily upload, share, and discover content from
                like-minded individuals.
              </p>
            </div>
          </div>
        </div>
        <div className="right_content">
          <div className="inner_content">
            <div className="input_Fields">
              <h1>Co-Share Log In</h1>
              <InputField
                handleChange={(e) => {
                  setIdentity(e.target.value);
                }}
                width={"100%"}
                id={"email"}
                placeholder={"Email or username"}
                type={"text"}
                key={"email"}
                margin="10px"
              />
              <InputField
                handleChange={(e) => {
                  setPassword(e.target.value);
                }}
                width={"100%"}
                id={"password"}
                placeholder={"Password"}
                type={"password"}
                key={"password"}
                margin="0px 0px 10px 0px"
              />
              <div className="errorMsg">{error ? error : ""}</div>
              <Button
                text={"Log In"}
                width={"100%"}
                key={"Login"}
                handleClick={handleLogin}
              />
              <br />
              <div className="login_message">
                <p>
                  Doesn't have an account?..{" "}
                  <Link to="/register">Register Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="display_panel"></div>
      </div>
    </>
  );
};

export default Login;
