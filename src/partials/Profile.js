import React ,{Component, Profiler} from 'react';
import PersonImg from "./../images/banda.jpg";
import Footer from "./../partials/Footer";

import "./css/styles.css";

const Profile = () => {

    return(
        <div className="profile__card">
            <div className="profile__cunt-1">
                <div className="profile__img">
                    <img src={PersonImg} />
                </div>
                <div  className="profile__cunt-1-details">
                    <h3>Name Name</h3>
                    <h3>LCS2019202</h3>
                    <h3>Batch Year -: 2019</h3>
                </div>
            </div>
            <div  className="profile__cunt-2">
                <div className="profile__cunt-2-details"><span>Email :</span>rdt@mail.com</div>
                <div className="profile__cunt-2-details"><span>Phone Number :</span>98XXXXXXXX</div>
                <div className="profile__cunt-2-details"><span>Branch    :</span>CS</div>
                <div className="profile__cunt-2-details"><span>Expected Graduation :</span>2021</div>
                <div className="profile__cunt-2-details-2">
                    <span>CGPA :</span>
                    <div className="profile__cunt-2-details-2-sem">
                        <p><span>sem 1:</span>0.0</p>
                        <p><span>sem 2:</span>0.0</p>
                        <p><span>sem 3:</span>0.0</p>
                        <p><span>sem 4:</span>0.0</p>
                        <p><span>sem 1:</span>0.0</p>
                        <p><span>sem 1:</span>0.0</p>
                        <p><span>sem 1:</span>0.0</p>
                        <p><span>sem 1:</span>0.0</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Profile;