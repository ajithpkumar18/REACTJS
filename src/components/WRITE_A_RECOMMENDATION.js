import React, { Component } from "react";

export default class WRITE_A_RECOMMENDATION extends Component {
  state = {
    name: " ",
    email: " ",
    company: " ",
    designation: " ",
    recommendation: " ",
    submitmessage: " ",
    submitmessagetextcolor: " ",
  };
  onChange = (ajith) => {
    this.setState({
      [ajith.target.name]: ajith.target.value,
    });
  };

  onSubmit = (ajith) => {
    ajith.preventDefault();
    const { name } = this.state;

    let summit = false;
    if (summit) {
      this.setState({
        submitmessage: `Thank you ${name} for your valuable time!!`,
        submitmessagetextcolor: "text-info",
      });
    } else {
      this.setState({
        submitmessage: "OOPS! Try agin later",
        submitmessagetextcolor: "text-danger",
      });
    }
  };
  render() {
    const { submitmessage, submitmessagetextcolor } = this.state;
    return (
      <div className="container my-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank You</span> for your valuable time
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form action="" onSubmit={this.onSubmit}>
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
                <label htmlFor="name"> Company/Institution*</label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name"> Designation *</label>
                <input
                  type="text"
                  name="designation"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Recommendation*</label>
                <textarea
                  className="form-control"
                  name="recommendation"
                  rows="5"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button className="btn btn-danger float-right" type="submit">
                Lot's of love
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
