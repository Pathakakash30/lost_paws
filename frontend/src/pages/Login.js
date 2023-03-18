import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import axios from "axios";

import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async () => {
    const response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });
    console.log(response.data);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <div className="login-card">
      <Card sx={{ maxWidth: "500px", padding: 0 }}>
        <form onSubmit={submitHandler}>
          <CardContent sx={{ textAlign: "center" }}>
            <h2>Login...</h2>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type="email"
              sx={{ width: "450px" }}
              onChange={emailHandler}
              value={email}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              sx={{ width: "450px", marginTop: "15px" }}
              onChange={passwordHandler}
              value={password}
            />

            <p>
              Are you New User? <a href="/register">Register</a>
            </p>
          </CardContent>

          <CardActions sx={{ textAlign: "right" }}>
            <Button variant="outlined" type="submit">
              Outlined
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default Login;
