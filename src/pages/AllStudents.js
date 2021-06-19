import React ,{Component} from 'react';
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Table from '../partials/Table';
import { Link } from "react-router-dom";
import "./css/styles.css";

/*
div>div*6
srno| rollno |Sname |backlogs |cgp |profile |
*/

const data = [
  {
    rollno: "LXX20XXXX",
    name: 'Lewis Hamilton',
    backlogs: '0',
    cgpa: '10',
    profile: ':id',
  },{
    rollno: "LXX20XXXX",
    name: 'Lewis',
    backlogs: '0',
    cgpa: '10',
    profile: ':id',
  },{
    rollno: "LXX20XXXX",
    name: 'Hamilton',
    backlogs: '0',
    cgpa: '10',
    profile: ':id',
  },{
    rollno: "LXX20XXXX",
    name: 'Lewis Hamilton',
    backlogs: '0',
    cgpa: '10',
    profile: ':id',
  },{
    rollno: "LXX20XXXX",
    name: 'Lewis',
    backlogs: '0',
    cgpa: '10',
    profile: ':id',
  },{
    rollno: "LXX20XXXX",
    name: 'Hamilton',
    backlogs: '0',
    cgpa: '10',
    profile: ':id',
  },
];

class AllStudents extends Component {

  render() {
    const tableFields = [
      '#', "rollno","name", "backlogs", "cgpa", "profile"
    ];

    const columnStruct = tableFields.map(el => {
      return(
        <div key={el} className={`allStudents__column-${el}`} >{el}</div>
      );
    });   

    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header type="dashboard" />

        {/*  Page content */}
        <div className="allStudents__section">
          {/* <h3 className="allStudents__section-heading">All Students</h3> */}
          <main className="allStudents__container flex-grow">
          <Table 
            tableData={data}
            headingColumns={tableFields}
            title="All Students"
          />
          </main>
        </div>
        {/*  Site footer */}
        <Footer />
      </div>
    );
  }
} 

export default AllStudents;