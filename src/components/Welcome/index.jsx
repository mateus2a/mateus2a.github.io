import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import WelcolmeCat from "../../assets/welcome_cats_thqn.svg";
import Button from "../Button/index.jsx";
import "./style.css";

function Welcome() {
  return (
    <div className="center">
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#F5F6FF",
            height: "60vh",
            borderRadius: 6,
            boxShadow: 1,
          }}
          className="box"
        >
          <div className="welcome">
            <img src={WelcolmeCat} alt="Welcome Cat" className="welcome-cat" />
            <Button title="Preencher Form" />
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Welcome;
