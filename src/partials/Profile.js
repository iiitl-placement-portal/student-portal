import React from "react";
import SvgIcon from "./SvgIcon";
// import PersonImg from "./../images/banda.jpg";
// import Footer from "./../partials/Footer";

import "./css/styles.css";


// get the student data from server
async function getStuData() {
  try {
    const data = await fetch("http://localhost:5000/profile", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    });
    const retData = await data.json();
    console.log("data", retData);
    return retData;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "error, please check console for details";
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    getStuData()
      .then((res) => {
        // console.log(res);
        this.setState({ user: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="profile__card">
        <div className="profile__cunt-1">
          <div className="profile__img">
            {/* <img src={ /> */}
            <SvgIcon src="banda.jpg" />
          </div>
          <div className="profile__cunt-1-details">
            <h3>{this.state.user.fullName}</h3>
            <h3>LCS2019202</h3>
            <h3>{this.state.user.passoutBatch}</h3>
          </div>
        </div>
        <div className="profile__cunt-2">
          <div className="profile__cunt-2-details">
            <span>Email :</span>
            {this.state.user.email}
          </div>
          <div className="profile__cunt-2-details">
            <span>Phone Number :</span> {this.state.user.contactNo}
          </div>
          <div className="profile__cunt-2-details">
            <span>Branch :</span>CS
          </div>
          <div className="profile__cunt-2-details">
            <span>Expected Graduation :</span>2021
          </div>
          <div className="profile__cunt-2-details-2">
            <span>CGPA :</span>
            <div className="profile__cunt-2-details-2-sem">
              <p>
                <span>sem 1:</span>{this.state.user.cgpa}
              </p>
              <p>
                <span>sem 2:</span>{this.state.user.cgpa}
              </p>
              <p>
                <span>sem 3:</span>{this.state.user.cgpa}
              </p>
              <p>
                <span>sem 4:</span>{this.state.user.cgpa}
              </p>
              <p>
                <span>sem 1:</span>{this.state.user.cgpa}
              </p>
              <p>
                <span>sem 1:</span>{this.state.user.cgpa}
              </p>
              <p>
                <span>sem 1:</span>{this.state.user.cgpa}
              </p>
              <p>
                <span>sem 1:</span>{this.state.user.cgpa}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
