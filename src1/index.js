import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// get the data from server
async function getData() {
  try {
    const data = await fetch("http://localhost:5000/test/view", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    });
    const retData = await data.json();
    // console.log("data", retData);
    return retData;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "Error, please check console for details";
  }
}

// get the student data from server
async function getStuData() {
  try {
    const data = await fetch("http://localhost:5000/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    });
    const retData = await data.json();
    // console.log("data", retData);
    return retData;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "error, please check console for details";
  }
}

async function getAnnouncement() {
  try {
    const data = await fetch("http://localhost:5000/announcement");
    const retData = await data.json();
    // console.log("data", retData);
    return retData;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "error, please check console for details";
  }
}
// test class to view the server response
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    getData()
      .then((res) => {
        // console.log(res[0].email);
        this.setState({ user: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>{JSON.stringify(this.state.user)}</div>;
  }
}

class Login extends React.Component {
  async handleClick(e) {
    e.preventDefault();
    // console.log(document.getElementById("email").value);
    try {
      const token = await axios.post("http://localhost:5000/login", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      });
      // console.log("token", token.data.token);
      localStorage.setItem("userToken", token.data.token);
      console.log(
        "Token received from server and saved in localStorage",
        localStorage.getItem("userToken")
      );
    } catch (err) {
      console.log("Login failure. Incorrect email or password");
      console.error(err);
    }
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" id="email"></input>
          <input type="password" id="password"></input>
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

class Logout extends React.Component {
  handleClick(e) {
    e.preventDefault();
    localStorage.clear("userToken");
    console.log(
      "If null appears next then token is cleared from localStorage and user can no longer fetch data from server without relogin",
      localStorage.getItem("userToken")
    );
  }
  render() {
    return <button onClick={this.handleClick}>Logout</button>;
  }
}

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    getStuData()
      .then((res) => {
        // console.log(res[0].email);
        this.setState({ user: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log(
      "Current token stored in local storage",
      localStorage.getItem("userToken")
    );
    return <div>{JSON.stringify(this.state.user)}</div>;
  }
}

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    getAnnouncement()
      .then((res) => {
        // console.log(res[0].email);
        this.setState({ user: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>{JSON.stringify(this.state.user)}</div>;
  }
}
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
    <Login />
    <Logout />
    <Student />
    <Announcement />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
