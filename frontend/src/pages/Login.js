import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../reduxSlice/userSlice";

import axios from "axios";

import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  let response;

  const submitForm = async () => {
    response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });

    if (response.data.status) {
      navigate("/");
      setError(false);

      dispatch(login(response.data.user));
      
    } else {
      setError(true);
      setErrorMessage(response.data.message);
    }
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
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
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
              Are you New User? <Link to="/register">Register</Link>
            </p>
          </CardContent>

          <CardActions sx={{ textAlign: "right" }}>
            <Button variant="outlined" type="submit">
              Outlined
            </Button>
          </CardActions>
        </form>
        <div>{error && <Alert severity="error">{errorMessage}</Alert>}</div>
      </Card>
    </div>
  );
};

export default Login;
