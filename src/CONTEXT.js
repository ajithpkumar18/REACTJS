import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    details: [
      {
        name: "Random guy-1",
        message: "He is a good engneer",
        desgn: "CEO at ABC company",
      },
      {
        name: "Random guy-2",
        message: "He is a excellent developer",
        desgn: "CEO at ABC company",
      },
      {
        name: "Random guy-3",
        message: "He is a lazy person",
        desgn: "CEO at ABC company",
      },
      {
        name: "Random guy-4",
        message: "He gets things done so quickly",
        desgn: "CEO at ABC company",
      },
    ],
    skills: [
      {
        name: "html5",
        imageUrl: require("./photos/html5.png"),
        starsTotal: 3,
        starsActive: 3,
      },
      {
        name: "cSS3",
        imageUrl: require("./photos/css3.png"),
        starsTotal: 3,
        starsActive: 3,
      },
      {
        name: "javascript",
        imageUrl: require("./photos/javascript.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        name: "bootstrap",
        imageUrl: require("./photos/bootstrap4.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        name: "reactJS",
        imageUrl: require("./photos/react.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        name: "mySQL",
        imageUrl: require("./photos/mysql.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        name: "python",
        imageUrl: require("./photos/python.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        name: "Flask",
        imageUrl: require("./photos/flask.png"),
        starsTotal: 3,
        starsActive: 2,
      },
    ],
    projects: [
      {
        id: 1,
        title: "Project 1",
        excerpt: "This is my project about...",
        imageUrl: require("./photos/free-stock-image-1.jpg"),
      },
      {
        id: 2,
        title: "Project 2",
        excerpt: "This is my project about...",
        imageUrl: require("./photos/free-stock-image-2.jpg"),
      },
      {
        id: 3,
        title: "Project 3",
        excerpt: "This is my project about...",
        imageUrl: require("./photos/free-stock-image-3.jpg"),
      },
      {
        id: 4,
        title: "Project 4",
        excerpt: "This is my project about...",
        imageUrl: require("./photos/free-stock-image-1.jpg"),
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
