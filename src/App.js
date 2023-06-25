// new branch 1.1
import "./App.css";
import React from "react";
import NAVBAR from "./components/NAVBAR";
import FOOTER from "./components/FOOTER";
import CONTACT from "./components/CONTACT";
import WRITE_A_RECOMMENDATION from "./components/WRITE_A_RECOMMENDATION";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PROJECTPAGE from "./components/PROJECTPAGE";
import HOMEPAGE from "./components/HOMEPAGE";
import { Provider } from "./CONTEXT";
import ALLPROJECTS from "./components/ALLPROJECTS";
import ADD_PROJECTS from "./components/ADD_PROJECTS";
import SCROLLTOTOP from "./components/SCROLLTOTOP";
import "./App.css";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <SCROLLTOTOP />
        <NAVBAR />
        <Switch>
          <Route exact path="/" component={HOMEPAGE} />
          <Route exact path="/contact" component={CONTACT} />
          <Route exact path="/allprojects" component={ALLPROJECTS} />
          <Route exact path="/addprojects" component={ADD_PROJECTS} />
          <Route exact path="/write" component={WRITE_A_RECOMMENDATION} />
          <Route exact path="/project/:id" component={PROJECTPAGE} />
        </Switch>
        <FOOTER />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// hello
