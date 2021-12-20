import "./App.css";
import React from "react";
import NAVBAR from "./components/NAVBAR";
// import TITLE from "./components/TITLE";
// import ABOUTME from "./components/ABOUTME";
import FOOTER from "./components/FOOTER";
// import PROJECTSECTION from "./components/PROJECTSECTION";
// import TECHNOLOGY from "./components/TECHNOLOGY";
// import RECCOMENDATION from "./components/RECCOMENDATION";
import CONTACT from "./components/CONTACT";
import WRITE_A_RECOMMENDATION from "./components/WRITE_A_RECOMMENDATION";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NOTFOUND from "./components/NOTFOUND";
import PROJECTPAGE from "./components/PROJECTPAGE";
import HOMEPAGE from "./components/HOMEPAGE";
import { Provider } from "./CONTEXT";
import ALLPROJECTS from "./components/ALLPROJECTS";
import ADD_PROJECTS from "./components/ADD_PROJECTS";
import SCROLLTOTOP from "./components/SCROLLTOTOP";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <SCROLLTOTOP />
        <NAVBAR />
        <Switch>
          <Route exact path="/REACT" component={HOMEPAGE} />
          <Route exact path="/REACT/contact" component={CONTACT} />
          <Route exact path="/REACT/allprojects" component={ALLPROJECTS} />
          <Route exact path="/REACT/addprojects" component={ADD_PROJECTS} />
          <Route exact path="/REACT/write" component={WRITE_A_RECOMMENDATION} />
          <Route exact path="/REACT/project/:num" component={PROJECTPAGE} />
        </Switch>
        <FOOTER />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// hello
