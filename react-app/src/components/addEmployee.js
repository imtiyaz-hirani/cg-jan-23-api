import { Component } from "react";
import { connect } from "react-redux";
import {listDepartment} from '../store/action/department';

export class AddEmployee extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            employee:{
                name: '',
                city: '',
                salary: 0,
                joiningDate: '',
                gender: '',
                department:{
                    id: '',
                    name: ''
                },
                user: {
                    username: '',
                    password: '',
                    role: 'EMPLOYEE'
                }
            },
            errors: {},
            msg: '',
            departments:[]
        };
      }

    componentDidMount(){
        //fetch all departments: call action
        //this.props.listDepartment();
    }  

    render(){
        return(
            <div>
            <div className="card">
              <h5 className="card-header">Add Employee</h5>
              <div className="card-body">
                <h5 className="card-title">Enter Employee Info: </h5>
                <p className="card-text">
                <span>{this.state.msg}</span> <br />
                   <label>Employee Name: </label>
                   <input type="text" 
                            name="name"
                            value={this.state.employee.name}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                    <br /><br />
                    <label>Employee City: </label>
                    <input type="text" 
                            name="city"
                            value={this.state.employee.city}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['city']}</span>
                    <br /><br />
                    <label>Employee Salary: </label>
                    <input type="number" 
                            name="salary"
                            value={this.state.employee.salary}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['salary']}</span>
                    <br /><br />
                    <label>Joining Date: </label>
                    <input type="date" 
                            name="joiningDate"
                            value={this.state.employee.joiningDate}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['joiningDate']}</span>
                    <br /><br />
                    <label>Select Gender: </label>
                    <select name="gender" 
                            value={this.state.employee.gender} 
                            onChange={this.changeHandler} > 
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                    </select>
                    <span style={{ color : 'red'}}>{this.state.errors['gender']}</span>
                    <br /><br />
                    <label>Select Department: </label>
                    <select name="departments" 
                            value={this.state.employee.department.id} 
                            onChange={this.changeHandler} > 
                        {/* {this.props.departmentList.list.map(d=>(
                            <option key={d.id} value={d.id}>{d.name}</option>
                        ))} */}
                        {console.log(this.props.listDepartment)}
                    </select>
                    <span style={{ color : 'red'}}>{this.state.errors['departmentId']}</span>
                    
                    <button onClick={this.onAdd}>Add Employee</button>
                </p>
                 
              </div>
            </div>
          </div>
        );
    }

    changeHandler= (event) =>{
        this.setState({
            employee: {
                ...this.state.employee, 
                [event.target.name] : event.target.value
            }
        });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.employee);
        /* Call the API */
       this.postEmployee(this.state.employee);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

handleValidation(){
    let name = this.state.employee.name;
    let city = this.state.employee.city;
    let salary = this.state.employee.salary;
    let joiningDate = this.state.employee.joiningDate;
    let gender = this.state.employee.gender;
    let departmentId = this.state.employee.department.id;
     
    let tempErrors={}
    let formValid = true; 

    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']='Employee Name cannot be empty';
    }
    if(!city){ //If name is not given
        formValid = false;
        tempErrors['city']='Employee city cannot be empty';
    }
    if(!salary){ //If name is not given
        formValid = false;
        tempErrors['salary']='Employee Salary cannot be empty';
    }
    if(!joiningDate){ //If name is not given
        formValid = false;
        tempErrors['joiningDate']='Please select employee joining date';
    }
    if(!gender){ //If name is not given
        formValid = false;
        tempErrors['gender']='Please select employee gender';
    }
    if(!departmentId){ //If name is not given
        formValid = false;
        tempErrors['departmentId']='Please select department ID';
    }
    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postEmployee(employee){
   console.log('call api ')
}
}


function mapStateToProps(state){
    return {
        listDepartment : state.department
    }    
}

export default connect(mapStateToProps, {listDepartment})(AddEmployee); 