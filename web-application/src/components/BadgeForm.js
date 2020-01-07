import React, { Component } from "react";

class BadgeForm extends Component {
  // state = {  };

  // handleChange = e => {
  //   // console.log({ name: e.target.name, value: e.target.value });
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  handleClick = () => {
    console.log("Se dio click");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Formulario enviado");
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title </label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter </label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
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
      </React.Fragment>
    );
  }
}

export default BadgeForm;
