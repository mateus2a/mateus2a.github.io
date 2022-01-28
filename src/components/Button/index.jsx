import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import "./style.css";

const CustomButtonRoot = styled("button")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #727af0;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  transition: 0.8s;

  &:hover {
    background-color: #555dd9;
  }
`;

function CustomButton(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function Button(props) {
  const { title, action } = props;
  return (
    <div className="wrapper">
      <CustomButton className="center-button" onClick={action}>
        {title}
      </CustomButton>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
