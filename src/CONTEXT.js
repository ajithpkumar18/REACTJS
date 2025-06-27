import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  // addprojectHandler = (newproject) => {
  //   this.setState({
  //     projects: this.state.projects.push(newproject),
  //   });

  //   console.log(newproject);
  //   console.log(this.state.projects);
  // };
  addProjectHandler = (newProject) => {
    this.setState({
      projects: [newProject, ...this.state.projects],
    });
  };
  state = {
    addProjectHandler: this.addProjectHandler,
    projects: [
      {
        id: 3,
        title: "Apple iPhone 15 Pro",
        excerpt:
          "Built with aerospace-grade titanium, the iPhone 15 Pro is Apple’s most advanced, lightest Pro model ever. Powered by the lightning-fast A17 Pro chip, it brings console-level gaming, stunning photography, and pro-grade video to the palm of your hand. With the all-new customizable Action button, a powerful camera system, and USB-C support, it's designed to empower creativity and performance at every touch.",
        imageUrl: require("./photos/apple.png"),
        link: "https://apple-landing-page-htyh.vercel.app/",
      },
      {
        id: 4,
        title: "Luxury INN",
        excerpt:
          "Luxury INN is a full-stack hotel booking web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It offers a seamless user experience for browsing, filtering, and booking hotels worldwide. With real-time availability, secure authentication, dynamic date selection, and responsive UI, GlobalStay ensures a smooth and intuitive booking process from start to finish.",
        imageUrl: require("./photos/hotel.png"),
        link: "https://luxury-inn-frontend.vercel.app",
      },
      {
        id: 3,
        title: "Netflix clone",
        excerpt:
          "This is my Netflix clone project. I have created the landing page of Netflix web app using React. I have also succesfully implemented the Login functionality with the help of Firebase and Redux. The backend of the website is hosted in firebase, it collects and stores the Login information and user credentials entered while signing in. Redux is used for storing the information in the frontend of the web app. The project is hosted in Firebase.",
        imageUrl: require("./photos/netflix.png"),
        link: "https://mynclone.web.app/profile",
      },
      {
        id: 2,
        title: "Joshugram",
        excerpt:
          "This is my project about the frontend part of a social media web app. The Web App is made using ReactJS, Material UI. The website was developed as part of Data Day Grind III Hackathon. I and my team created this website for showcasing the trash spread by people which is manufactured by Private companies like Coca Cola, Pepsi, Lays etc. Users would upload photos of the trash that is spread in public places. The uploaded photos undergo image processing from where we identify the company that manufactured the product. The data collected from these uploads are used to highlight which company has the most trash and in which zone. Users would be given reward coins based on the upload milestones. Using which they can buy NFTS through our website. ",
        imageUrl: require("./photos/joshgram.png"),
        link: "https://sparkling-gingersnap-9403f2.netlify.app",
      },
      {
        id: 1,
        title: "Furniture House",
        excerpt:
          "This is my project about the fontend part of an E-commerce website used for selling Wooden utensils therefore the name ComfyHouse. User can view all the items avaiable in the list, add the items to the cart, increase the quantity of items, calculated total will be showed to them in the cart section. The technologies used include HTML, CSS, JS.",
        imageUrl: require("./photos/comfy.png"),
        link: "https://effervescent-horse-e710d8.netlify.app",
      },
    ],
    details: [
      {
        id: 1,
        name: "Akhil S. Nair",
        email: "akhilsnair1047@gmail.com",
        company: "Juspay",
        designation: "Product Analyst",
        message: "Ajith is a hard working and a good engineer.",
      }, // {
      //   id: 2,
      //   name: "Random guy-2",
      //   message: "He is a excellent developer",
      //   desgn: "CEO at ABC company",
      // },
      // {
      //   id: 3,
      //   name: "Random guy-3",
      //   message: "He is a lazy person",
      //   desgn: "CEO at ABC company",
      // },
      // {
      //   id: 4,
      //   name: "Random guy-4",
      //   message: "He gets things done so quickly",
      //   desgn: "CEO at ABC company",
      // },
    ],
    skills: [
      {
        id: 1,
        name: "reactJS",
        imageUrl: require("./photos/react.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 2,
        name: "nodeJS",
        imageUrl: require("./photos/nodejss.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 3,
        name: "javascript",
        imageUrl: require("./photos/javascript.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "bootstrap",
        imageUrl: require("./photos/bootstrap4.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 5,
        name: "tailwind",
        imageUrl: require("./photos/tailwind.jpg"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "mySQL",
        imageUrl: require("./photos/mysql.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "python",
        imageUrl: require("./photos/python.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl: require("./photos/flask.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 9,
        name: "MongoDB",
        imageUrl: require("./photos/mongoDb.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 9,
        name: "expressjs",
        imageUrl: require("./photos/expressjs.jpg"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 10,
        name: "PostgreSQL",
        imageUrl: require("./photos/postgresql.png"),
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 11,
        name: "Prisma",
        imageUrl: require("./photos/prisma.png"),
        starsTotal: 3,
        starsActive: 2,
      },
    ],
    // {
    //   id: 3,
    //   title: "Project 3",
    //   excerpt: "This is my project about...",
    //   imageUrl: require("./photos/free-stock-image-3.jpg"),
    //   body: "Body-3",
    // },
    // {
    //   id: 4,
    //   title: "Project 4",
    //   excerpt: "This is my project about...",
    //   imageUrl: require("./photos/free-stock-image-1.jpg"),
    //   body: "Body-4",
    // },
  };

  // async componentDidMount() {
  //   const response = await axios.get("http://localhost:9000/recommendations");
  //   const response2 = await axios.get("http://localhost:9000/skills");

  //   console.log(response.data.isSuccesful);

  //   if (response.data.isSuccesful) {
  //     this.setState({
  //       details: response.data.results,
  //     });
  //   }
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
