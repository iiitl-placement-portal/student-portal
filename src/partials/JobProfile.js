import React ,{Component} from 'react';
import Header from "./../partials/Header";
import Footer from "./../partials/Footer";
import SvgIcon from "./SvgIcon";
import { Switch, Route, useLocation, Redirect,Link } from "react-router-dom";

import "./css/styles.css";

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
                                <Link to="/login" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800">
                                    <span>Apply Now</span>
                                </Link>
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