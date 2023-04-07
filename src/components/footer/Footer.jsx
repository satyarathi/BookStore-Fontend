import React from "react";
import "./footer.css";
import { Box, TextField } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <Box className="copyright-text">
        <h3
          style={{
            marginRight: "600px",
            width: "700px",
            height: "13px",
            font: "normal normal normal 15px/13px Roboto",
            letterSpacing: "0px",
            color: "white",
          }}
        >
          Copyright ⓒ 2020, BookStore Private Limited. All Rights Reserved{" "}
        </h3>
      </Box>
    </div>
  );
}

export default Footer;
