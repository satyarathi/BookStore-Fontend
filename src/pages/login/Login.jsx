import React from "react";
import "./login.css";
import buyonline from "../../requiredItems/buyonline.png";
import IconButton from "@mui/material/IconButton";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { loginUser } from "../../services/UserService";
import { Link, redirect, useNavigate } from "react-router-dom";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function Login(props) {
  const clickSignup = () => {
    props.listenToLoginPage();
  };

  const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });
  const [errorObj, setErrorObj] = React.useState({
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const navigate = useNavigate();

  const takeEmail = (event) => {
    // setn((prev)=>prev+1)
    setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSigninObj((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const submit1 = async () => {
    let emailTest = emailRegex.test(signinObj.email);
    let passwordTest = passwordRegex.test(signinObj.password);

    if (emailTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "enter correct email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "enter correct password",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: false,
        passwordHelper: "",
      }));
    }

    if (emailTest === true && passwordTest === true) {
      let response = await loginUser(signinObj);
      console.log(
        "response------------------------------------------>",
        response
      );
      localStorage.setItem("token", response.data.data.token);
      // return redirect("/dashboard");
      navigate("/dashboard");
    }
  };
  return (
    <div className="login-form">
      <div className="main-container1">
        <div className="left-box1">
          <img className="left-box-image1" src={buyonline} alt="error" />
          <span className="left-box-text">Online Book Shopping</span>
        </div>
        <div className="right-box1">
          <div className="pageSwitch1">
            <IconButton
              style={{
                marginLeft: 60,
                color: "#878787",
                width: "72px",
                height: "33px",
                textAlign: "left",
                font: "normal normal medium 25px/33px Roboto",
                letterSpacing: "0px",
                textTransform: "uppercase",
                opacity: "1",
              }}
            >
              Login
            </IconButton>
            <IconButton
              style={{
                marginRight: 20,
                width: "89px",
                height: "33px",
                textAlign: "left",
                font: "normal normal medium 25px/33px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                textTransform: "uppercase",
                opacity: "1",
              }}
              onClick={clickSignup}
            >
              Signup
            </IconButton>
          </div>
          <div className="textBox1">
            <Box className="textEmailId1">
              <h3
                style={{
                  width: "49px",
                  height: "13px",
                  font: "normal normal normal 12px/13px Roboto",
                  letterSpacing: "0px",
                  color: "#0A0102",
                  textTransform: "capitalize",
                  opacity: "1",
                  position: "relative",
                  bottom: "-10px",
                }}
              >
                email id
              </h3>
              <input
                style={{
                  width: "98%",
                  height: "100%",
                  marginBottom: "10px",
                  borderRadius: "2px",
                }}
                id="outlined-basic"
                label="first name"
                variant="outlined"
                onChange={takeEmail}
                size="small"
                error={errorObj.emailError}
                helperText={errorObj.emailHelper}
              />
            </Box>
            <Box className="textPassword1">
              <h3
                style={{
                  width: "44px",
                  height: "13px",
                  font: "normal normal normal 12px/13px Roboto",
                  letterSpacing: "0px",
                  color: "#0A0102",
                  textTransform: "capitalize",
                  opacity: "1",
                  position: "relative",
                  bottom: "-10px",
                }}
              >
                Password
              </h3>
              <input
                style={{
                  width: "98%",
                  height: "100%",
                  marginBottom: "10px",
                  borderRadius: "2px",
                }}
                id="outlined-basic"
                label="first name"
                variant="outlined"
                onChange={takePassword}
                size="small"
                error={errorObj.passwordError}
                helperText={errorObj.passwordHelper}
              />
            </Box>
            <Box className="loginButton">
              <Button
                variant="contained"
                style={{
                  width: "255px",
                  height: "37px",
                  background: "#A03037 0% 0% no-repeat padding-box",
                  ErrorRadius: "3px",
                  opacity: "1",
                  marginTop: "10px",
                }}
                onClick={submit1}
              >
                <h3
                  style={{
                    width: "22px",
                    height: "18px",
                    position: "relative",
                    right: "17px",
                    font: "normal normal bold 14px/18px Meiryo UI",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    opacity: "1",
                  }}
                >
                  Login
                </h3>
              </Button>
            </Box>
            <div className="or">
              <strong>OR</strong>
            </div>
            <Box className="extra-button">
              <Button
                variant="contained"
                style={{
                  width: "120px",
                  height: "37px",
                  background: "#4266b2 0% 0% no-repeat padding-box",
                  ErrorRadius: "3px",
                  opacity: "1",
                  marginTop: "10px",
                }}
              >
                <h3
                  style={{
                    width: "22px",
                    height: "18px",
                    position: "relative",
                    right: "27px",
                    font: "normal normal normal 12px/16px Roboto;",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    opacity: "1",
                  }}
                >
                  Facebook
                </h3>
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "120px",
                  height: "37px",
                  background: "#f5f5f5 0% 0% no-repeat padding-box",
                  ErrorRadius: "3px",
                  opacity: "1",
                  marginTop: "10px",
                }}
              >
                <h3
                  style={{
                    width: "22px",
                    height: "18px",
                    position: "relative",
                    right: "27px",
                    font: "normal normal normal 12px/16px Roboto;",
                    letterSpacing: "0px",
                    color: "#6c6767",
                    textTransform: "uppercase",
                    opacity: "1",
                  }}
                >
                  Google
                </h3>
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
