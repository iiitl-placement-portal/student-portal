import React from "react";
import Stats from "./components/Stats";
import Announcement from "./components/Announcements";
import AnnouncementForm from "./components/AnnouncementForm";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex flex-col overflow-hidden">
        {/*  Page content */}

        <div className="dashboardTpo__section">
          <main className="dashboardTpo__container">
            <div className="dashboardTpo__cunt">
              {/* <NotificationTpo /> */}
              <div className="dashboardTpo__Notification">
                <div className="notificationTpo__calendar">
                  <iframe
                    title="Calendar"
                    src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=bW90dGFuaGFyc2hkZWVwQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA2MDk1NTY3MzMwODE5ODM4ODk1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAzNjg4NDA2MDkxMDE4NjQ5Mzk0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043&color=%23202124&color=%237627bb"
                    height="550"
                    min-width="40rem"
                    width="100%"
                  ></iframe>
                </div>
              </div>
              <div className="dashboardTpo__Notification">
                <div className="dashboardTpo__approve">
                  <h3 className="notificationTpo__heading">
                    Students Placement Statistics
                  </h3>
                  <div className="dashboardTpo__stats">
                    <div className="piechart">
                      <Stats batch="B.Tech" />
                    </div>
                    <div className="piechart">
                      <Stats batch="B.Tech Intern" />
                    </div>
                    <div className="piechart">
                      <Stats batch="M.Tech" />
                    </div>
                    <div className="piechart">
                      <Stats batch="MBA" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboardTpo__cunt">
              <Announcement />

              <div className="dashboardTpo__Notification">
                <h3 className="dashboardTpo">Create Notification</h3>
                <div className="form__dashboard">
                  <div className="form__mail">
                    <AnnouncementForm
                      button={"Send as Personal Notification"}
                    />
                  </div>
                  <div className="form__mail">
                    <AnnouncementForm button={"Send to all as mail"} />
                  </div>

                  <div className="form__mail">
                    <AnnouncementForm button={"Send to all as SMS"} />
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;
