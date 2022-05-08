import React, {useState} from "react";
import "../css/more-styles.css";
import AllJobs from "./components/AllPendingJobs";


const JobApproval = () => {

  return (
    <div className="flex flex-col overflow-hidden">
      {/*  Page content */}
      <div className="jobApproval__section">
        <div className="jobApproval__section-heading">
          <h3 >Pending Approval</h3>
        </div>
        <div className=".jobApproval__cards">
          <AllJobs />
        </div>
      </div>
    </div>
  );
};

export default JobApproval;
