import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import WelcolmeCat from "../../assets/welcome_cats_thqn.svg";

import "./style.css";

function Welcome() {
  return (
    <div className="center">
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#F5F6FF",
            height: "70vh",
            borderRadius: 6,
            boxShadow: 1,
          }}
        >
          <div className="welcome">
            <img src={WelcolmeCat} alt="Welcome Cat" className="welcome-cat" />
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Welcome;
