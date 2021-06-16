import React ,{Component} from 'react';
import Header from "../partials/Header";
import Footer from "../partials/Footer";
// import JobProfile from "../partials/JobProfile";
import { Link } from "react-router-dom";
import CompanyCard from "./../partials/CompanyCard";
import "./css/styles.css";


class AllCompany extends Component {

  constructor(props) {
    super(props);
    this.state = {
      JobsAll: [],
    };
  }

  componentDidMount() {
    // getAllJobs()
    //   .then((res) => {
    //     // console.log(res);
    //     this.setState({ JobsAll: res });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    const companyCard = this.state.JobsAll.map((it) => {
      // console.log(it)
      return (
        <Link key={it.jobId} to={"/jobs/" + it._id}>
          <CompanyCard
            key={it.jobId}
            details={it}
          />
        </Link>
      );
    });

    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header type="dashboard" />

        {/*  Page content */}
        <div className="jobsApply__section">
          <h3 className="jobsApply__section-heading">All Companies</h3>
          <main className="jobsApply__container flex-grow">
            {/* {companyCard} */}
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </main>
        </div>
        {/*  Site footer */}
        <Footer />
      </div>
    );
  }
} 

export default AllCompany;