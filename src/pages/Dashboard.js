import React ,{Component} from 'react';
import Header from "./../partials/Header";
import Footer from "./../partials/Footer";
import Profile from "./../partials/Profile";
import Notification from "./../partials/Notification";
import Announcement from "./../partials/Announcement";

import "./css/Dashboard.css";



class Dashboard extends Component {

    render() {
        return(
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header type="dashboard" />

                {/*  Page content */}
                <div  className="dashboard__section">
                <main className="dashboard__container flex-grow">
                    <div className="dashboard__profile">
                        <Profile />
                    </div>
                    <div className="dashboard__cunt-2">
                        <div className="dashboard__notifi">
                            <Notification />
                        </div>        
                        <div className="dashboard__announce">
                            <Announcement />
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