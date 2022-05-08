import React, { Component } from "react";
import Table from "./components/Table";
// import { Link } from "react-router-dom";
import "./components/css/table.css";

/*
div>div*6
srno| rollno |Sname |backlogs |cgp |profile |
*/

const data = [
  {
    rollno: "LXX20XXXX",
    name: "Lewis Hamilton",
    backlogs: "0",
    cgpa: "10",
    status: "unplaced",
    profile: ":id",
  },
  {
    rollno: "LXX20XXXX",
    name: "Lewis",
    backlogs: "0",
    cgpa: "10",
    status: "placed",
    profile: ":id",
  },
  {
    rollno: "LXX20XXXX",
    name: "Hamilton",
    backlogs: "0",
    cgpa: "10",
    status: "unplaced",
    profile: ":id",
  },
  {
    rollno: "LXX20XXXX",
    name: "Lewis Hamilton",
    backlogs: "0",
    cgpa: "10",
    status: "unplaced",
    profile: ":id",
  },
  {
    rollno: "LXX20XXXX",
    name: "Lewis",
    backlogs: "0",
    cgpa: "10",
    status: "placed",
    profile: ":id",
  },
  {
    rollno: "LXX20XXXX",
    name: "Hamilton",
    backlogs: "0",
    cgpa: "10",
    status: "unplaced",
    profile: ":id",
  },
];



class AllStudents extends Component {

  exportToCsv(filename, rows) {
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

      var csvFile = '';
      for (var i = 0; i < rows.length; i++) {
          csvFile += processRow(rows[i]);
      }

      var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) { // IE 10+
          navigator.msSaveBlob(blob, filename);
      } else {
          var link = document.createElement("a");
          if (link.download !== undefined) { // feature detection
              // Browsers that support HTML5 download attribute
              var url = URL.createObjectURL(blob);
              link.setAttribute("href", url);
              link.setAttribute("download", filename);
              link.style.visibility = 'hidden';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          }
      }
  }
  
  // exportToCsv('export.csv', [
  //   ['name','description'],	
  //   ['david','123'],
  //   ['jona','""'],
  //   ['a','b'],
  
  // ])

  render() {
    const tableFields = ["#", "rollno", "name", "backlogs", "cgpa","Status", "profile"];

    // const columnStruct = tableFields.map((el) => {
    //   return (
    //     <div key={el} className={`allStudents__column-${el}`}>
    //       {el}
    //     </div>
    //   );
    // });

    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <div className="allStudents__section">
          {/* <h3 className="allStudents__section-heading">All Students</h3> */}
          <main className="allStudents__container flex-grow">
            <Table
              tableData={data}
              headingColumns={tableFields}
              title="All Students"
              jsonToCsv={this.downloadAll}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default AllStudents;
