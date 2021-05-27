import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import JobsApply from "./pages/JobsApply";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import ResetPassword from "./pages/ResetPassword";

import useToken from "./components/App/useToken";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* <Redirect to="/home" /> */}
        </Route>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/jobs-apply">
          <JobsApply title="Apply for Jobs"/>
        </Route>
        <Route exact path="/job-applied">
          <JobsApply title="Applied Jobs" />
        </Route>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
      </Switch>
    </>
  );
}

export default App;
