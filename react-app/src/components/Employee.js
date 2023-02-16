import { Component } from "react";
 
import { AddEmployee } from "../components/addEmployee";
import Department from "./employee-components/department";
import EmployeeList from "./employee-components/employeeList";

export default class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item employee-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Employees </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item employee-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Department</button></li>
                   <li className="list-group-item">
                <button  className=" list-group-item employee-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                   Add Employee</button></li>
              <li className="list-group-item">Add Project</li>
              <li className="list-group-item">Assign Employee to Project</li>
              <li className="list-group-item">Show all Projects</li>
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <EmployeeList />:this.state.componentNum === 2?
                  <Department />:<AddEmployee />}
          </div> 
        </div>
      </div>
    );
  }
 

   
};

 