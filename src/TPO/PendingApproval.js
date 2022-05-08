import React, { useState } from "react";
import "../css/more-styles.css";
import AllPendingJobs from "./components/AllPendingJobs";

const PendingApproval = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/*  Page content */}
      <div className="jobApproval__section">
        <div className="jobApproval__section-heading">
          <h3>Pending Approval</h3>
        </div>
      </div>
      <AllPendingJobs />
    </div>
  );
};

export default PendingApproval;
