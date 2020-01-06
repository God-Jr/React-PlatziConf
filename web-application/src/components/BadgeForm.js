import React, { Component } from "react";

class BadgeForm extends Component {
  handleChange = e => {
    console.log({ name: e.target.name, value: e.target.value });
  };

  handleClick = () => {
    console.log("Se dio click");
  };
  handleSubmit = e => {
      e.preventDefault();
    console.log('Formulario enviado');
      
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>
          <button
            onClick={this.handleClick}
            className="btn btn-primary"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
