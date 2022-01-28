import React from "react";
import $ from "jquery";
import WelcolmeCat from "../../assets/welcome_cats_thqn.svg";
import Button from "../Button/index.jsx";

import "./style.css";

function initForm() {
  $(".welcome").css("display", "none");
  $(".form").css("display", "block");
}

function Welcome() {
  return (
    <div className="center">
      <div className="welcome">
        <img src={WelcolmeCat} alt="Welcome Cat" className="welcome-cat" />
        <Button title="Preencher Formulário" action={initForm} />
      </div>
    </div>
  );
}

export default Welcome;
