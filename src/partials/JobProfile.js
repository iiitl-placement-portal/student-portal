import React, { Component } from "react";
import Header from "./../partials/Header";
import Footer from "./../partials/Footer";
import SvgIcon from "./SvgIcon";
import { Switch, Route, useLocation, Redirect, Link } from "react-router-dom";
import moment from "moment";
import "./css/styles.css";

const getJobDetails = async (id) => {
  try {
    const data = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: "get",
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    }).then((val) => val.json());
    data.companyName = data.company.companyName;

    // console.log("data", data);
    
    // console.log()
    // console.log(data.deadlineDate);
    return data;
  } catch (err) {
    console.error("Error in getting Job Details", err);
  }
};

const applyForJob = async (id) => {
  // console.log("applying", id);
  try {
    const data = await fetch(`http://localhost:5000/jobs/${id}/apply`, {
      method: "post",
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    }).then((val) => val.json());
    // console.log(data);
    
  } catch (err) {
    console.error("Error in applying for Job", err);
  }
};

class JobProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      jobDetails: {},
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const jobId = url.replace("/jobs/", "");
    // this.setState({id:ret});
    this.setState({
      id: jobId,
    });

    getJobDetails(jobId).then((val) => {
      this.setState({ jobDetails: val });
    });
  }

  render() {


    return (
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
              <h3>{this.state.jobDetails.jobDescription}</h3>
              <p>
                {this.state.jobDetails.companyName}
                {", "}
                {this.state.jobDetails.postingLocation}
              </p>
              <div className="jobsProfile__header-details">
                <div>
                  <h6>Eligibility</h6>
                  <p>{this.state.jobDetails.isStudentEligible ? "You are Eligible" : "You are Not Eligible"}</p>
                </div>
                <div>
                  <h6>Last date to Apply</h6>
                  <p>{moment(this.state.jobDetails.deadlineDate).format("DD-MM-YYYY hh:mm A")}</p>
                </div>
                <div>
                  <h6>Only for Female candidates</h6>
                  <p>{this.state.jobDetails.onlyForFemales}</p>
                </div>
              </div>
              <div className="jobsProfile__header-button">
                <ul className="flex flex-grow justify-end flex-wrap items-center">
                  <li>
                    <Link
                      to="/home"
                      className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
                    >
                      <span onClick={() => applyForJob(this.state.id)}>
                        {this.state.isEligible ? (this.state.isApplied ? "Applied" :"Apply") : "Not Eligible" }
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="jobsProfile__main">
              <div className="jobsProfile__main-heading">
                <h3>About the job</h3>
              </div>
              <div className="jobsProfile__main-para">
                <h5>Description</h5>
                <p>
                  berste Ziel unseres Unternehmens ist die Zufriedenheit unserer
                  Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen
                  Koordination dieser Bestellung hinter den Kulissen wollen wir
                  stets flexibel, agil und zielgerichtet auftreten. Daher lautet
                  eines unserer zentralen Führungsprinzipien "Im Zweifel:
                  Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die
                </p>
              </div>
              <div className="jobsProfile__main-para">
                <h5>Qualitfication Needed</h5>
                <p>
                  berste Ziel unseres Unternehmens ist die Zufriedenheit unserer
                  Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen
                  Koordination dieser Bestellung hinter den Kulissen wollen wir
                  stets flexibel, agil und zielgerichtet auftreten. Daher lautet
                  eines unserer zentralen Führungsprinzipien "Im Zweifel:
                  Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die
                </p>
              </div>
              <div className="jobsProfile__main-para">
                <h5>Role</h5>
                <p>
                  berste Ziel unseres Unternehmens ist die Zufriedenheit unserer
                  Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen
                  Koordination dieser Bestellung hinter den Kulissen wollen wir
                  stets flexibel, agil und zielgerichtet auftreten. Daher lautet
                  eines unserer zentralen Führungsprinzipien "Im Zweifel:
                  Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die
                </p>
              </div>
            </div>

            <div className="jobsProfile__footer">
              <h3 className="jobsProfile__footer-header">Pay Range</h3>
              <p>{this.state.jobDetails.package}</p>
            </div>
          </main>
        </div>
        {/*  Site footer */}
        <Footer />
      </div>
    );
  }
}

export default JobProfile;
