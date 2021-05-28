import React ,{Component, Profiler} from 'react';
import "./css/styles.css";
import SvgIcon from "./SvgIcon";
// import userImg from "./../images/user.svg";

const JobCard = (props) => {

    return(
        <div className="jobsApply__card">
            <div className="jobsApply__card--img">
                {/* <img src={Cimg} /> */}
                <SvgIcon src="favicon.png" />
            </div>
            <div className="jobsApply__card--details">
                <div className="jobsApply__card--heading">
                    <h3>{props.companyName}</h3>
                    <p>Apply Before : Wed May 26 2021</p>
                </div>
                <div className="jobsApply__card--desc">
                    <div className="jobsApply__card--desc-field">
                        <SvgIcon src="user.svg" />
                        <div className="">
                            <p>Looking for</p>
                            <h4>Position</h4>
                        </div>
                    </div>
                    <div className="jobsApply__card--desc-field">
                        <SvgIcon src="location.svg" />
                        <div className="">
                            <p>Location</p>
                            <h4>Position</h4>
                        </div>
                    </div>
                    <div className="jobsApply__card--desc-field">
                        <SvgIcon src="rupee.svg" />
                        <div className="">
                            <p>Salary</p>
                            <h4>Position</h4>
                        </div>
                    </div>
                    <div className="jobsApply__card--desc-field">
                        <SvgIcon src="web-programming.svg" />
                        <div className="">
                            <p>Job Type</p>
                            <h4>Position</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
} 

export default JobCard;