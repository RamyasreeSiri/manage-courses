import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./components/App.js";
import HomePage from "./components/home/HomePage.js";
import AboutPage from "./components/about/AboutPage.js";
import CoursesPage from "./components/course/CoursesPage.js";
import ManageCoursePage from "./components/course/ManageCoursePage.js"; //eslint-disable-line import/no-named-as-default

const Routes = props => {
  return (
    <App>
      <Switch>
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </App>
  );
};

export default Routes;
