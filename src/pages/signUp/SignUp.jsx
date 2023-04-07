import React from "react";
import "./signup.css";
import buyonline from "../../requiredItems/buyonline.png";
import IconButton from "@mui/material/IconButton";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { registerUser } from "../../services/UserService";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const nameReg = /^[A-Z]{1}[a-zA-Z]+$/;

function SignUp(props) {
  const clickLogin = () => {
    props.listenToSignUpPage();
  };

  const [signupObj, setSignupObj] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorObj, setErrorObj] = React.useState({
    firstNameError: false,
    firstNameHelper: "",
    lastNameError: false,
    lastNameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const takefirstName = (a) => {
    setSignupObj((prevState) => ({ ...prevState, firstName: a.target.value }));
  };
  const takelastName = (b) => {
    setSignupObj((prevState) => ({ ...prevState, lastName: b.target.value }));
  };
  const takeEmail = (event) => {
    setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSignupObj((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const submit = async () => {
    let firstNameTest = nameReg.test(signupObj.firstName);
    let lastNameTest = nameReg.test(signupObj.lastName);
    let emailTest = emailRegex.test(signupObj.email);
    let passwordTest = passwordRegex.test(signupObj.password);

    if (firstNameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: true,
        firstNameHelper: "enter correct firstname",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: false,
        firstNameHelper: "",
      }));
    }

    if (lastNameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: true,
        lastNameHelper: "enter correct lastname",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: false,
        lastNameHelper: "",
      }));
    }

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

    if (
      firstNameTest === true &&
      lastNameTest === true &&
      emailTest === true &&
      passwordTest === true
    ) {
      let response = await registerUser(signupObj);
      console.log(response);
    }
  };
  return (
    <div className="signup-form">
      <div className="main-container">
        <div className="left-box">
          <img className="left-box-image" src={buyonline} alt="error" />
          <span className="left-box-text">Online Book Shopping</span>
        </div>
        <div className="right-box">
          <div className="pageSwitch">
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
              onClick={clickLogin}
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
            >
              Signup
            </IconButton>
          </div>
          <div className="textBox">
            <Box className="textFirstName">
              <h3
                style={{
                  width: "70px",
                  height: "13px",
                  font: "normal normal normal 11px/11px Roboto",
                  letterSpacing: "0px",
                  color: "#0A0102",
                  textTransform: "capitalize",
                  opacity: "1",
                  position: "relative",
                  bottom: "-10px",
                }}
              >
                First name
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
                onChange={takefirstName}
                size="small"
                error={errorObj.firstNameError}
                helperText={errorObj.firstNameHelper}
              />
            </Box>
            <Box className="textLastName">
              <h3
                style={{
                  width: "55px",
                  height: "13px",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  font: "normal normal normal 11px/11px Roboto",
                  letterSpacing: "0px",
                  color: "#0A0102",
                  textTransform: "capitalize",
                  opacity: "1",
                  position: "relative",
                  bottom: "-10px",
                }}
              >
                Last name
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
                onChange={takelastName}
                size="small"
                error={errorObj.lastNameError}
                helperText={errorObj.lastNameHelper}
              />
            </Box>
            <Box className="textEmailId">
              <h3
                style={{
                  width: "45px",
                  height: "13px",
                  font: "normal normal normal 11px/11px Roboto",
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
            <Box className="textPassword">
              <h3
                style={{
                  width: "44px",
                  height: "13px",
                  font: "normal normal normal 11px/11px Roboto",
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
            <Box className="signUpButton">
              <Button
                variant="contained"
                style={{
                  width: "255px",
                  height: "37px",
                  background: "#A03037 0% 0% no-repeat padding-box",
                  ErrorRadius: "3px",
                  opacity: "1",
                  marginTop: "20px",
                }}
                onClick={submit}
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
                  Signup
                </h3>
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
