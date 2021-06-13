import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import SvgIcon from "./SvgIcon";
// import PersonImg from "./../images/banda.jpg";
// import Footer from "./../partials/Footer";

import "./css/styles.css";

// get the student data from server
async function getStuData() {
  try {
    const profile = await fetch("http://localhost:5000/profile", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    }).then((val) => val.json());
    // console.log(profile);
    const announcement = await fetch("http://localhost:5000/announcement", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    }).then((val) => val.json());
    profile.announcement = announcement;
    return profile;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "Error, please check console for details";
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
        res.fullName = res.fullName.toUpperCase();
        res.enrollmentNumber = res.enrollmentNumber.toUpperCase();
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
            <h3>{this.state.user.enrollmentNumber}</h3>
            <a
              href={this.state.user.linkedlnURL}
              className="mx-3"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href={this.state.user.resumeUrl}
              className="mx-3"
              title="Resume"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFileAlt} />
            </a>
          </div>
        </div>
        <div className="profile__cunt-2">
          <div className="profile__cunt-2-section">
            <div className="profile__cunt-2-details">
              <span>Email :</span>
              {this.state.user.email}
            </div>
            <div className="profile__cunt-2-details">
              <span>Phone Number :</span> {this.state.user.contactNo}
            </div>
            <div className="profile__cunt-2-details">
              <span>Expected Graduation :</span> {this.state.user.passoutBatch}
            </div>
          </div>
          <div className="profile__cunt-2-section">
            <div className="profile__cunt-2-details">
              <span>Approved by TPO :</span>{" "}
              {this.state.user.approvedByTPO ? "Yes" : "No"}
            </div>
            <div className="profile__cunt-2-details">
              <span>Backlogs :</span>
              {this.state.user.backlogs}
            </div>
            <div className="profile__cunt-2-details">
              <span>CGPA :</span> {this.state.user.cgpa}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
