import React from "react";
import moment from "moment";
import "./css/styles.css";
import SvgIcon from "./SvgIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUserTie,
  faRupeeSign,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  // console.log(props.details)
  return (
    <div className="job__card">
      <div className="job__card__section-1">
        <div className="company-logo-container">
          {/* <img src={Cimg} /> */}
          <SvgIcon src="logo.png" classname="company-logo" />
        </div>

        <div className="company-name-container">
          {/* <h5>Company Name</h5> */}
          <hr style={{ border: "1px solid darkgray" }} />
          <h3>Company Name</h3>
        </div>
      </div>

      <div className="job__card__section-2">
        <div className="company-details-container">
          <div className="company-details">
            <FontAwesomeIcon icon={faUserTie} className="fa-icon" />
            <div className="company-details-value">
              <p>Jobs Posted</p>
              <h3>4</h3>
            </div>
          </div>
          {/* <div className="company-details">
            <FontAwesomeIcon icon={faBriefcase} className="fa-icon" />
            <div className="company-details-value">
              <p>Job Type</p>
              <h3>{props.details.recruitmentType}</h3>
            </div>
          </div> */}
          <div className="company-details">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
            <div className="company-details-value">
              <p>Location</p>
              <h3>_Location_</h3>
            </div>
          </div>
          <div className="company__buttons">
            <Link key={Math.random(4)} to="/add-job" >
              <h4>Add Job</h4>
            </Link>
            <Link key={Math.random(4)} to="/remove-company" >
              <h4 className="company__buttons-red">Remove Company</h4>
            </Link>
          </div>
          {/* <div className="company-details">
            <FontAwesomeIcon icon={faRupeeSign} className="fa-icon" />
            <div className="company-details-value">
              <p>Package</p>
              <h3>{props.details.package}</h3>
            </div>
          </div> */}
        </div>

        <hr style={{ border: "1px solid darkgray" }} />

        <div className="apply-before-container">
          Registed Date :{" "}
          <span>DD-MM-YYYY
            {/* {props.details.deadlineDate === "Applied"
              ? "Applied"
              : moment(props.details.deadlineDate).format("DD-MM-YYYY")} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
