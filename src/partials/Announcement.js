import React, { Component, Profiler } from "react";
import "./css/styles.css";

const geeAnnouncements = async () => {
  const data = await fetch("http://localhost:5000/announcement", {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
    },
  }).then((val) => val.json());
//   console.log(data);
  return data;
};

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
    };
  }
  componentDidMount() {
    geeAnnouncements()
      .then((val) => {
        this.setState({ announcements: val });
      })
      .catch((err) => {
        console.error("Error in notification", err);
      });
  }
  render() {
    const allAnnouncements = this.state.announcements.map((val) => {
      return <p>{val.message}</p>;
    });
    return (
      <div className="notification__section">
        <h3 className="notification__heading">Announcements</h3>
        <div className="notification__container">{allAnnouncements}</div>
      </div>
    );
  }
}

export default Announcement;
