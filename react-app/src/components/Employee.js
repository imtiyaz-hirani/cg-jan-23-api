import { Component } from "react";
import { connect } from "react-redux";
import { listEmployee } from "../store/action/employee";
import Department from "./employee-components/department";

export class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDepartmentAdd : false
    };
  }

  componentDidMount() {
     this.props.listEmployee();
  }
  
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item employee-sidebar" onClick={()=>{
                this.setState({showDepartmentAdd : false})
              }} > Show all Employees </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item employee-sidebar" onClick={()=>(this.setState({showDepartmentAdd: true}))}>
                   Add Department</button></li>
              <li className="list-group-item">Add Employee</li>
              <li className="list-group-item">Add Project</li>
              <li className="list-group-item">Assign Employee to Project</li>
              <li className="list-group-item">Show all Projects</li>
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.showDepartmentAdd?<Department />:this.showEmployeeList()}
          </div>
        </div>
      </div>
    );
  }

  showEmployeeList(){
    return(
      <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">City</th>
          <th scope="col">Salary</th>
          <th scope="col">Joining Date</th>
          <th scope="col">Gender</th>
          <th scope="col">Department</th>
          <th scope="col">Project List</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.employeeList.list.map((e, index) => (
           
            <tr key={e.id}>
              <th scope="row" key={e.id}> {index + 1}</th>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.city}</td>
              <td>{e.salary}</td>
              <td>{e.joiningDate}</td>
              <td>{e.gender}</td>
              <td>{e.department.name}</td>
              <td> 
                {e.projects.map(p=> (
                    <li key={index}>
                        {p.title} 
                    </li>
                ))}
              </td>
            </tr>
          
        ))}   
      </tbody>
    </table>
    )
  }; 

};

function mapStateToProps(state) {
  return {
    employeeList: state.employee
  }; 
}

export default connect(mapStateToProps, {listEmployee})(Employee);
