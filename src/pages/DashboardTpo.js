import React from "react";
import Header from "./../partials/Header";
import Footer from "./../partials/Footer";
import Profile from "./../partials/Profile";
import Notification from "./../partials/Notification";
import Announcement from "./../partials/Announcement";

import "./css/styles.css";

const links = [
    {
        name:"All Companies",
        nav:"all-company"
    },{
        name:"All Students",
        nav:"allStudentsTpo"
    },{
        name:"Unnamed",
        nav:"Unnamed"
    },
];

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header type="dashboardTpo" nav={links} />

        {/*  Page content */}
        <div className="dashboardTpo__section">
          <main className="dashboardTpo__container flex-grow">
            <div className="dashboardTpo__links">
              <ul>
                <li>Create New Announcement</li>
                <li>Register New Company</li>
                <li>Add New Job</li>
              </ul>
            </div>
            <div className="dashboardTpo__cunt">  
              <div className="dashboardTpo__notif">        
                <h3 className="notificationTpo__heading">Notifications</h3>
                {/* <NotificationTpo /> */}
                <ul>
                  <li>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr</li>
                  <li>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr</li>
                  <li>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr</li>
                </ul>
              </div>
              <div className="dashboardTpo__approve">        
                <h3 className="notificationTpo__heading">Approve Students</h3>
                {/* <ApproveStudents /> */}
                <ul>
                  <li>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
        {/*  Site footer */}
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
