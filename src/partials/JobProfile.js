import React ,{Component} from 'react';
import Header from "./../partials/Header";
import Footer from "./../partials/Footer";
import SvgIcon from "./SvgIcon";
import { Switch, Route, useLocation, Redirect,Link } from "react-router-dom";

import "./css/styles.css";

const applyForJob = async (id) => {
    try {
        const data = await fetch(`http://localhost:5000/jobs/${id}/apply`, {
            method: "post",
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")).token,
            },
        }).then(val => val.json())
        console.log(data);
    }
    catch (err) {
        console.error("Error in applying for Job", err);
    }
}

const JobProfile =  () =>{
    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header type="dashboard" />

            {/*  Page content */}
            <div className="jobsProfile__section">
                <main className="jobsProfile__container flex-grow">
                    <div className="jobsProfile__header">
                        <div className="jobsProfile__header-img">
                            <SvgIcon src="banda.jpg" />
                        </div>
                        <h3>Positin name</h3>
                        <p>Company name . complete location</p>
                        <div className="jobsProfile__header-details">
                            <div>
                                <h6>Mini Heading</h6>
                                <p>Lorem berste</p>
                            </div>
                            <div>
                                <h6>Mini Heading</h6>
                                <p>Lorem berste</p>
                            </div>
                            <div>
                                <h6>Mini Heading</h6>
                                <p>Lorem berste</p>
                            </div>
                        </div>
                        <div className="jobsProfile__header-button">
                            <ul className="flex flex-grow justify-end flex-wrap items-center">
                                <li>
                                    <span><button onClick={applyForJob()}>Apply Now</button></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="jobsProfile__main">  
                        <div className="jobsProfile__main-heading">
                            <h3>ABout the job</h3>
                        </div>  
                        <div className="jobsProfile__main-para">
                            <h5>Description</h5>
                            <p>
                                berste Ziel unseres Unternehmens ist die Zufriedenheit unserer Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen Koordination dieser Bestellung hinter den Kulissen wollen wir stets flexibel, agil und zielgerichtet auftreten. Daher lautet eines unserer zentralen Führungsprinzipien "Im Zweifel: Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die 
                            </p>
                        </div>
                        <div className="jobsProfile__main-para">
                            <h5>Role</h5>
                            <p>
                                berste Ziel unseres Unternehmens ist die Zufriedenheit unserer Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen Koordination dieser Bestellung hinter den Kulissen wollen wir stets flexibel, agil und zielgerichtet auftreten. Daher lautet eines unserer zentralen Führungsprinzipien "Im Zweifel: Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die 
                            </p>
                        </div>
                        <div className="jobsProfile__main-para">
                            <h5>Qualification</h5>
                            <p>
                                berste Ziel unseres Unternehmens ist die Zufriedenheit unserer Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen Koordination dieser Bestellung hinter den Kulissen wollen wir stets flexibel, agil und zielgerichtet auftreten. Daher lautet eines unserer zentralen Führungsprinzipien "Im Zweifel: Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die 
                            </p>
                        </div>
                    </div>
                    
                    <div className="jobsProfile__footer">
                        <h3 className="jobsProfile__footer-header">Pay Range</h3>
                        <p>Slaary info</p>
                    </div>
                </main>
            </div>
            {/*  Site footer */}
            <Footer />

        </div>
    );
}

export default JobProfile;