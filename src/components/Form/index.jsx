/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import $ from "jquery";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "../Button/index.jsx";
import fire from "../../fire.jsx";
import "./style.css";

class Form extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    team: "",
    satisfaction: "",
  };

  handleTeam = (e) => {
    this.setState({
      team: e.target.value,
    });
  };

  // eslint-disable-next-line react/no-unused-class-component-methods
  seeResults = () => {
    if ($("input[name=team_number]:checked").length <= 0) {
      $(".question_one").css("color", "red");
    }
    if ($("input[name=satisfaction_score]:checked").length <= 0) {
      $(".question_two").css("color", "red");
    } else {
      $(".welcome").css("display", "none");
      $(".form").css("display", "none");
      $(".graph").css("display", "block");
      this.handleSubmit();
    }
  };

  // eslint-disable-next-line react/no-unused-class-component-methods
  handleSatisfaction = (e) => {
    this.setState({
      satisfaction: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // eslint-disable-next-line no-unused-vars
    const messageRef = fire
      .database()
      .ref("form")
      .orderByKey()
      .limitToLast(100);
    // eslint-disable-next-line react/destructuring-assignment
    fire
      .database()
      .ref("form")
      // eslint-disable-next-line react/destructuring-assignment
      .push({ team: this.state.team, satisfaction: this.state.satisfaction });
    this.setState({
      satisfaction: "",
      team: "",
    });
  };

  render() {
    return (
      <Box
        className="form"
        sx={{ mx: "auto", width: "100%", padding: 6, maxWidth: 800 }}
      >
        <div className="question-one">
          <Typography variant="h5" component="div" gutterBottom>
            Quantas pessoas tem sua equipe?
          </Typography>
          <div className="answers-question-one">
            <div className="asnwer-q-one">
              <input
                type="radio"
                onChange={this.handleTeam}
                id="one"
                name="team_number"
                value="1 até 3"
                className="team"
                required
              />
              <label htmlFor="one" className="label-team">
                1 até 3
              </label>
            </div>
            <div className="asnwer-q-one">
              <input
                type="radio"
                onChange={this.handleTeam}
                id="four"
                name="team_number"
                value="4 até 6"
                className="team"
              />
              <label htmlFor="four" className="label-team">
                4 até 6
              </label>
            </div>
            <div className="asnwer-q-one">
              <input
                type="radio"
                onChange={this.handleTeam}
                id="seven"
                name="team_number"
                value="7 até 9"
                className="team"
              />
              <label htmlFor="seven" className="label-team">
                7 até 9
              </label>
            </div>
            <div className="asnwer-q-one">
              <input
                type="radio"
                onChange={this.handleTeam}
                id="ten"
                name="team_number"
                value="10 até 14"
                className="team"
              />
              <label htmlFor="ten" className="label-team">
                10 até 14
              </label>
            </div>
            <div className="asnwer-q-one">
              <input
                type="radio"
                onChange={this.handleTeam}
                id="more"
                name="team_number"
                value="15 ou mais"
                className="team"
              />
              <label htmlFor="more" className="label-team">
                15 ou mais
              </label>
            </div>
          </div>
        </div>

        <div className="question-two">
          <Typography variant="h5" component="div" gutterBottom>
            Qual a sua satisfação com a empresa?
          </Typography>
          <div className="answers-question-two">
            <div className="answer-q-two text_one">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                id="one_satisfaction_score"
                name="satisfaction_score"
                value={1}
                className="satisfaction_score"
                required
              />
              <label
                htmlFor="one_satisfaction_score"
                className="label-question-two"
              >
                Pouco satisfeito
              </label>
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={2}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={3}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={4}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={5}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={6}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={7}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={8}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                name="satisfaction_score"
                value={9}
                className="satisfaction_score"
              />
            </div>
            <div className="answer-q-two text_ten">
              <input
                type="radio"
                onChange={this.handleSatisfaction}
                id="one_satisfaction_score"
                name="satisfaction_score"
                value={10}
                className="satisfaction_score"
              />
              <label
                htmlFor="one_satisfaction_score"
                className="label-question-two"
              >
                Muito satisfeito
              </label>
            </div>
          </div>
        </div>

        <Button title="Ver Resultados" action={this.seeResults} />
      </Box>
    );
  }
}

export default Form;
