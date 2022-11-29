import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const headers = {};

  const handleSubmit = async () => {
    if (name && email && password && retypePassword) {
      if (email.includes("@")) {
        if (password === retypePassword) {
          const data = {
            name: name,
            email: email,
            password: password,
          };
          const response = await axios
            .post("http://localhost:3333/sign-up", data, {
              headers,
            })
            .then((res) => {
              if (res.status === 200) {
                return res;
              } else {
                return res;
              }
            })
            .catch((err) => {
              return err;
            });

          alert(response);
        }
      }
    }
  };
  return (
    <form>
      <div className="container">
        <div className="wrapper">
          <img src="https://digitalnex.com.br/imgs/nexLogo2.png" alt="logo" />
          <Input
            title={"Name"}
            placeholder={"Type your full name"}
            required={true}
            type={"text"}
            setValue={setName}
          />
          <Input
            title={"Email"}
            placeholder={"example@example.com"}
            required={true}
            type={"email"}
            setValue={setEmail}
          />
          <Input
            title={"Password"}
            placeholder={"Type a password"}
            required={true}
            type={"password"}
            setValue={setPassword}
          />
          <Input
            title={"Confirm the password"}
            placeholder={"Retype the password"}
            required={true}
            type={"password"}
            setValue={setRetypePassword}
          />
          <button onClick={(e) => handleSubmit()}>Register</button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
