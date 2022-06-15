import React, { Component } from "react";

export default class CONTACT extends Component {
  state = {
    name: " ",
    email: " ",
    description: " ",
    submitmessage: " ",
    submitmessagetextcolor: " ",
  };

  onChange = (ajith) => {
    this.setState({ [ajith.target.name]: ajith.target.value });
  };

  onsubmit = (event) => {
    event.preventDefault();

    let issuccesful = true;
    const { name } = this.state;

    if (issuccesful) {
      this.setState({
        submitmessage: `Thank you ${name}. I will contact you soon`,
        submitmessagetextcolor: "text-info",
      });
    } else {
      this.setState({
        submitmessage: "OOPS! something went wrong. Please try again later.",
        submitmessagetextcolor: "text-danger",
      });
    }
  };

  render() {
    const { submitmessage, submitmessagetextcolor } = this.state;
    return (
      <div className="container my-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank You</span> for your interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form action="" onSubmit={this.onsubmit}>
              <div className="form-group">
                <label htmlFor="name"> Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name"> Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Tell me about your project *</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                className="btn btn-dark float-right"
                type="submit"
                style={{ backgroundColor: "black" }}
              >
                Let's talk buisness
              </button>
            </form>
          </div>
        </div>

        <div className="py-5 my-2 text-center">
          <h5 className={submitmessagetextcolor}>{submitmessage}</h5>
        </div>
      </div>
    );
  }
}
