import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import * as jwt from "jsonwebtoken";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import AllJobs from "./pages/AllJobs";
import Dashboard from "./pages/Dashboard";
import AddCompany from "./pages/AddCompany";
import Login from "./components/Login/Login";
import AppliedJobs from "./pages/AppliedJobs";
import Logout from "./components/Login/Logout";
import JobProfile from "./partials/JobProfile";
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
  } else {
    const payload = jwt.decode(token);
    // console.log(payload);
    // console.log(Date.now()/1000)
    if (payload.exp <= Date.now() / 1000) {
      localStorage.removeItem("token");
      return <Login setToken={setToken} />;
    }
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/all-jobs">
          <AllJobs title="All Jobs" />
        </Route>
        <Route path="/jobs/:id">
          <JobProfile />
        </Route>
        <Route exact path="/applied-jobs">
          <AppliedJobs title="Applied Jobs" />
        </Route>
        <Route exact path="/add-job">
          <AddJob />
        </Route>
        
        <Route exact path="/add-company">
          <AddCompany />
        </Route>
        <Route exact path="/profile">
          
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
