import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./Login.css";
import { Margin } from "@mui/icons-material";

const Login = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("hello");
  };
  return (
    <div className="login-card">
      <Card sx={{ maxWidth: '500px', padding:0, }}>
        <form onSubmit={submitHandler}>
          <CardContent sx={{ textAlign: "center" }}>
            <h2>Login...</h2>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type='email'
              sx={{ width: "450px" }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type='password'
              sx={{ width: "450px", marginTop:"15px" }}
            />

            <p>Are you New User? <a href='/register'>Register</a></p>
          </CardContent>

          <CardActions  sx={{ textAlign: "right" }}>
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
