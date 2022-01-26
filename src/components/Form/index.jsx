/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import fire from "../../fire.jsx";

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
  handleSatisfaction = (e) => {
    this.setState({
      satisfaction: e.target.value,
    });
  };

  // eslint-disable-next-line no-unused-vars
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
      <div className="App-header">
        <div>
          <p>Quantas pessoas tem sua equipe?</p>
          <input
            type="radio"
            onChange={this.handleTeam}
            id="one"
            name="team_number"
            value="1 até 3"
          />
          <label htmlFor="one">1 até 3</label>
          <input
            type="radio"
            onChange={this.handleTeam}
            id="four"
            name="team_number"
            value="4 até 6"
          />
          <label htmlFor="four">4 até 6</label>
          <input
            type="radio"
            onChange={this.handleTeam}
            id="seven"
            name="team_number"
            value="7 até 9"
          />
          <label htmlFor="seven">7 até 9</label>
          <input
            type="radio"
            onChange={this.handleTeam}
            id="ten"
            name="team_number"
            value="10 até 14"
          />
          <label htmlFor="ten">10 até 14</label>
          <input
            type="radio"
            onChange={this.handleTeam}
            id="more"
            name="team_number"
            value="15 ou mais"
          />
          <label htmlFor="more">15 ou mais</label>
        </div>

        <div>
          <p>Qual a sua satisfação com a empresa?</p>
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            id="one_satisfaction_score"
            name="satisfaction_score"
            value="1"
          />
          <label htmlFor="one_satisfaction_score">Pouco satisfeito</label>
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="2"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="3"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="4"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="5"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="6"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="7"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="8"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            name="satisfaction_score"
            value="9"
          />
          <input
            type="radio"
            onChange={this.handleSatisfaction}
            id="one_satisfaction_score"
            name="satisfaction_score"
            value="10"
          />
          <label htmlFor="one_satisfaction_score">Muito satisfeito</label>
        </div>
        <button onClick={this.handleSubmit} type="submit">
          {" "}
          Save{" "}
        </button>
      </div>
    );
  }
}

export default Form;
