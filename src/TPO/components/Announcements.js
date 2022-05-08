import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import {BASE_URL} from "../../CONSTANTS";
import "../../css/styles.css";
import AnnouncementForm from "./AnnouncementForm";


const getAnnouncement = async () => {
  const data = await fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
    },
  }).then((val) => val.json());
  const unreadAnnouncement = data.Announcement;
  const readAnnouncements = data.readAnnouncements;
  // console.log(unreadAnnouncement);
  return {
    unreadAnnouncement,
    readAnnouncements,
  };
};

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadAnnouncements: [],
      readAnnouncements: [],
    };
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }
  componentDidMount() {
    getAnnouncement()
      .then((val) => {
        this.setState({
          unreadAnnouncements: val.unreadAnnouncement,
          readAnnouncements: val.readAnnouncements,
        });
      })
      .catch((err) => {
        console.error("Error in Announcement", err);
      });
  }
  rerenderParentCallback() {
    // alert("rerender");
    getAnnouncement()
      .then((val) => {
        this.setState({
          unreadAnnouncements: val.unreadAnnouncement,
          readAnnouncements: val.readAnnouncements,
        });
      })
      .catch((err) => {
        console.error("Error in Announcement", err);
      });
  }
  render() {
    const newAnnouncements = "ar"
    // this.state.unreadAnnouncements.map((val) => {
    //   return (
    //     <AnnouncementCard
    //       message={val.message}
    //       imgSrc="check.svg"
    //       onClick="read"
    //       cursor="pointer"
    //       title="Mark as Read"
    //       iat={val.iat}
    //       key={val.iat}
    //       reRender={this.rerenderParentCallback}
    //     />
    //   );
    // });
    const allReadAnnouncements = "da"
    // this.state.readAnnouncements.map((val) => {
    //   return (
    //     <AnnouncementCard
    //       message={val.message}
    //       imgSrc="close.svg"
    //       iat={val.iat}
    //       key={val.iat}
    //       onClick="delete"
    //       cursor="pointer"
    //       title="Delete Announcement"
    //       reRender={this.rerenderParentCallback}
    //     />
    //   );
    // });
    const allAnnouncements = newAnnouncements.concat(allReadAnnouncements);
    return (
      <div className="Announcement__section">
        <h3 className="Announcement__heading">All Announcements</h3>
        <div className="Announcement__container">{allAnnouncements}</div>
        <div className="form__mail">
          <AnnouncementForm type={"announcement"} button={"Create New Announcement"}/>
        </div>
      </div>
    );
  }
}

export default Announcement;
