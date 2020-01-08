import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/sideBar";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Interest from "./components/interests";
import Portfolio from "./components/portfolio";
import Skill from "./components/skills";
import NoMatch from "./components/noMatch";
import "./App.css";

const App = props => {
  return (
    <React.Fragment>
      <Sidebar data={props.data} />
      <div className="container-fluid p-0">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <About data={props.data.about} />}
          />
          <Route
            exact
            path="/about"
            component={() => <About data={props.data.about} />}
          />
          <Route
            exact
            path="/education"
            component={() => <Education data={props.data.education} />}
          />
          <Route
            exact
            path="/experience"
            component={() => <Experience data={props.data.experience} />}
          />
          <Route
            exact
            path="/interests"
            component={() => <Interest data={props.data.interests} />}
          />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/skills"
            component={() => <Skill data={props.data.skills} />}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
