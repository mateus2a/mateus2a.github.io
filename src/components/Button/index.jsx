import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import ButtonPurple from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import "./style.css";

const ColorButton = styled(ButtonPurple)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#727dd0",
  "&:hover": {
    backgroundColor: "#727af0;",
  },
}));

function Button(props) {
  const { title } = props;
  return (
    <Stack direction="row">
      <div className="center-button">
        <ColorButton>{title}</ColorButton>
      </div>
    </Stack>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
