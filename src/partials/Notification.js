import React, { Component, Profiler } from "react";
import "./css/styles.css";

const getNotification = async () => {
  const data = await fetch("http://localhost:5000/profile", {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
    },
  }).then((val) => val.json());
  const notification = data.notification;
//   console.log(notification);
  return notification;
};

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: [],
    };
  }
  componentDidMount() {
    getNotification()
      .then((val) => {
        this.setState({ notification: val });
      })
      .catch((err) => {
        console.error("Error in notification", err);
      });
  }
  render() {
    const allNotifications = this.state.notification.map((val) => {
      return <p>{val.message}</p>;
    });
    return (
      <div className="notification__section">
        <h3 className="notification__heading">Notifications</h3>
        <div className="notification__container">{allNotifications}</div>
      </div>
    );
  }
}

export default Notification;
