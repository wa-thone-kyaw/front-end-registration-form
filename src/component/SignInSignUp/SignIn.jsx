import React, { useState } from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { database } from "./database";
import "./SignIn.css";
import { Card } from "./Card";
import axios from "axios";
import { AdminNavBar } from "../AdminNavBar/AdminNavBar";
export const SignIn = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }
    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    axios
      .post("http://127.0.0.1:8000/student_registration/login", {
        username,
        password,
      })
      .then((response) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setErrorMessages({
          name: "loginFailed",
          message: "Invalid credentials",
        });
      });
  };

  /* const currentUser=database.find((user) => user.username === username);
        if(currentUser){

            if(currentUser.password !== password){
                setErrorMessages({name:"password", message:errors.password})  
            }else{

                setErrorMessages({});
                setIsLoggedIn(true);
            }

        }else{

            setErrorMessages({name:"username", message:errors.username})
        }

    }; */
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );
  return (
    <>
      <div>
        <AdminNavBar />
        <Card>
          <h1 className="title">Sign In</h1>
          <p className="subtitle">
            Please Log in using your username and password!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="signin">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="err">
                {renderErrorMsg("username")}
                {renderErrorMsg("noUsername")}
              </div>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="err">
                {renderErrorMsg("password")}
                {renderErrorMsg("noPassword")}
              </div>
            </div>
            <br />
            <br />
          </form>
          <Link to="/dashboard">
            {" "}
            <input type="submit" value="Sign In" className="sign_btn" />
          </Link>
          {/* <div className="icons">
          <GoogleIcon className="icon" />
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
        </div> */}
        </Card>
      </div>
    </>
  );
};
