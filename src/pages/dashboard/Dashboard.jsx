import React, { useState } from "react";
import SignUp from "../signUp/SignUp";
import Login from "../login/Login";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import Books from "../../components/books/Books";

function Dashboard() {
  const [toggles, setToggle] = useState(true);

  const listenToSignUpPage = () => {
    setToggle(false);
  };

  const listenToLoginPage = () => {
    setToggle(true);
  };
  return (
    <div>
      <Header />
      <Books />
      <Footer />
      <div>
        {/* {toggles ? (
          <SignUp listenToSignUpPage={listenToSignUpPage} />
        ) : (
          <Login listenToLoginPage={listenToLoginPage} />
        )} */}
      </div>
    </div>
  );
}

export default Dashboard;
