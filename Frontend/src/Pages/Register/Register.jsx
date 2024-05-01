import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/Input/Input";
import "./style.scss";
import Uploader from "../../components/Uploader/Uploader";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImg, setCoverImg] = useState();

  function handleAvatar(selectedFile) {
    selectedFile ? setAvatar(selectedFile) : "";
  }
  function handleCoverImage(selectedFile) {
    selectedFile ? setCoverImg(selectedFile) : "";
  }

  function handleRegister() {
    if (!fullname) {
      alert("Fullname cannnot be empty");
    }

    if (!username) {
      alert("Username cannot be empty");
    }

    if (!email) {
      alert("Email cannot be empty");
    }

    if (!password) {
      alert("Password cannot be empty");
    }

    if (!avatar) {
      alert("Avatar cannot be empty");
    }

    let formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("avatar", avatar);
    formData.append("coverImg", coverImg ? coverImg : "");

    axios
      .post("http://localhost:3000/api/v1/user/register", formData, {
        headers: "multipart/form-data",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }

  function handleFullname(e) {
    setFullname(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="register_Container">
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
              <h1>Co-Share Register</h1>
              <InputField
                width={"100%"}
                id={"fullname"}
                placeholder={"Fullname"}
                type={"text"}
                key={"fullname"}
                margin="10px"
                handleChange={handleFullname}
              />
              <InputField
                width={"100%"}
                id={"username"}
                placeholder={"Username"}
                type={"text"}
                key={"username"}
                margin="10px"
                handleChange={handleUsername}
              />
              <InputField
                width={"100%"}
                id={"Email"}
                placeholder={"Email"}
                type={"email"}
                key={"Email"}
                margin="0px 0px 10px 0px"
                handleChange={handleEmail}
              />
              <InputField
                width={"100%"}
                id={"password"}
                placeholder={"Password"}
                type={"password"}
                key={"password"}
                margin="0px 0px 10px 0px"
                handleChange={handlePassword}
              />
              <div className="uploader">
                <Uploader
                  name={"Avatar"}
                  text={"Upload Avatar"}
                  width={49}
                  onFileSelect={handleAvatar}
                />
                <Uploader
                  name={"CoverImg"}
                  text={"Upload CoverImg"}
                  width={49}
                  onFileSelect={handleCoverImage}
                />
              </div>
              <br />
              <Button
                text={"Register"}
                width={"100%"}
                key={"register"}
                handleClick={handleRegister}
              />
              <br />
              <div className="register_message">
                <p>
                  Already have an account?.. <Link to="/login">Log In Now</Link>
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

export default Register;
