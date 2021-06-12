import React from "react";
import NotificationCard from "./NotificationCards";
import "./css/styles.css";

const newNotification = [
  "Dummy1",
  "Dummy2",
  "Dummy3",
  "Dummy4",
  "Dummy5",
  "Dummy6",
  "Dummy7",
  "Dummy8",
];
const readNotification = [
  "Dummy 11",
  "Dummy 21",
  "Dummy 31",
  "Dummy 41",
  "Dummy 51",
  "Dummy 61",
  "Dummy 71",
  "Dummy 81",
];

const getNewNotification = async () => {
  const data = await fetch("http://localhost:5000/profile", {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
    },
  }).then((val) => val.json());
  const notification = data.notification;
  //   console.log(notification);
  return {
    newNotification,
    readNotification,
  };
};

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: {
        newNotification: [],
        readNotification: [],
      },
    };
  }
  componentDidMount() {
    getNewNotification()
      .then((val) => {
        // console.log(val);
        this.setState({ notifications: val });
      })
      .catch((err) => {
        console.error("Error in notification", err);
      });
  }
  render() {
    const newNotifications = this.state.notifications.newNotification.map(
      (val) => {
        return (
          <NotificationCard
            message={val}
            imgSrc="check.svg"
            onClick="read"
            cursor="pointer"
            title="Mark as Read"
          />
        );
      }
    );
    const allReadNotifications = this.state.notifications.readNotification.map(
      (val) => {
        return (
          <NotificationCard
            message={val}
            imgSrc="close.svg"
            onClick="delete"
            cursor="pointer"
            title="Delete Notification"
          />
        );
      }
    );
    const allNotifications = newNotifications.concat(allReadNotifications);
    return (
      <div className="notification__section">
        <h3 className="notification__heading">My Notifications</h3>
        <div className="notification__container">{allNotifications}</div>
      </div>
    );
  }
}

export default Notification;
