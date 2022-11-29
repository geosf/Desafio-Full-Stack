import axios from "axios";
import React, { useState } from "react";
import Input from "../../components/Input";
import "./styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const data = {
      email,
      password,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios
      .post("http://localhost:3333/sign-in", data, { headers })
      .then((res) => {
        if (res.status === 200) {
          return res.status;
        }
      })
      .catch((err) => {
        return err;
      });

    alert(response);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <img src="https://digitalnex.com.br/imgs/nexLogo2.png" alt="logo" />
        <Input
          title={"Email"}
          placeholder={"example@example.com"}
          required={true}
          type={"email"}
          setValue={setEmail}
        />
        <Input
          title={"Password"}
          placeholder={"Password"}
          required={true}
          type={"password"}
          setValue={setPassword}
        />
        <button onClick={(e) => handleClick()}>Login</button>
        <div className="sign-up">
          <p>Don't have an account?</p>
          <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
