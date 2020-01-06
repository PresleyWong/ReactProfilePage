import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
      <React.Fragment>
        <Sidebar data={props.data} />
        <div className="container-fluid p-0">
          <Switch>
            <Route
              path="/about"
              exact
              component={() => <About data={props.data.about} />}
            />
            <Route
              path="/education"
              component={() => <Education data={props.data.education} />}
            />
            <Route
              path="/experience"
              component={() => <Experience data={props.data.experience} />}
            />
            <Route
              path="/interests"
              component={() => <Interest data={props.data.interests} />}
            />
            <Route path="/portfolio" component={Portfolio} />
            <Route
              path="/skills"
              component={() => <Skill data={props.data.skills} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
