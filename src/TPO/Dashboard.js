import React from "react";
import Stats from "./components/Stats";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex flex-col overflow-hidden">
        {/*  Page content */}
        
        <div className="dashboardTpo__section">
          <main className="dashboardTpo__container flex-grow">
            <div className="dashboardTpo__cunt">
              <div className="dashboardTpo__notif">
                <h3 className="notificationTpo__heading">Calendar</h3>
                {/* <NotificationTpo /> */}
                <div className="notificationTpo__calendar">
                  <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=bW90dGFuaGFyc2hkZWVwQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA2MDk1NTY3MzMwODE5ODM4ODk1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAzNjg4NDA2MDkxMDE4NjQ5Mzk0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043&color=%23202124&color=%237627bb" height="500" width="100%" ></iframe>
                </div>
              </div>
              <div className="dashboardTpo__approve">
                <h3 className="notificationTpo__heading">Students Placement Statistics</h3>
                <div className="dashboardTpo__stats" ><Stats /></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;