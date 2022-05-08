import React, {useState} from "react";
import "../css/more-styles.css";
import AllJobs from "./components/AllPendingJobs";
import AllPendingJobs from "./components/CompanyCard";


const JobApproval = () => {

  return (
    <div className="flex flex-col overflow-hidden">
      {/*  Page content */}
      <div className="jobApproval__section">
        <div className="jobApproval__section-heading">
          <h3 >Pending Approval</h3>
        </div>
        <div className=".jobApproval__cards">
          <AllPendingJobs />
        </div>
      </div>
    </div>
  );
};

export default JobApproval;
