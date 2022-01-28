/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Form from "./components/Form/index.jsx";
import GraphTeam from "./components/GraphTeam/index.jsx";
import Welcome from "./components/Welcome/index.jsx";

import "./App.css";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cointainer">
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
              <Welcome />
              <Form />
            </Box>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
