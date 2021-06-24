import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as jwt from "jsonwebtoken";
import * as serviceWorker from "./serviceWorker";

import StudentApp from "./StudentApp";
import TPOApp from "./TPOApp";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";

import "./css/style.scss";
import "./css/styles.css";
import "./css/more-styles.css";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  const payload = jwt.decode(token);
  // console.log(payload);
  // console.log(Date.now()/1000)
  if (payload.exp <= Date.now() / 1000) {
    localStorage.removeItem("token");
    return <Login setToken={setToken} />;
  }

  if (payload.role === "student") {
    return <StudentApp />;
  }

  if (payload.role === "tpo") {
    return <TPOApp />;
  }

  return <Login setToken={setToken} />;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
