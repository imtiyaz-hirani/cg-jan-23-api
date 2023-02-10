import { Component } from "react";

export default class SignUp  extends Component{

    constructor(){
        super();

        this.state={
                user: {
                    name: '',
                    email: '',
                    password: ''
                },
                errors: {}
        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <label>Enter the name: </label>
                <input type="text" 
                        name="name"
                        value={this.state.user.name}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                <br /><br />
                <label>Enter Email: </label>
                <input type="text" 
                        name="email"
                        value={this.state.user.email}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['email']}</span>
                <br /><br />
                <label>Enter password: </label>
                <input type="password" 
                        name="password"
                        value={this.state.user.password}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['password']}</span>
                <br /><br />
                <button onClick={this.onSignUp}>Sign Up</button>
            </div>
        );
    }
    changeHandler= (event) =>{
        this.setState({
            user: {
                ...this.state.user, 
                [event.target.name] : event.target.value
            }
        });
    }

    onSignUp = ()=>{
        /* Validate User inputs */
        if(this.handleValidation()){
            console.log(this.state.user);
            /* Call the API */
        }
        else{
            /* Display error messages */
            console.log('validation not passed..');
             
        }
        
    }

    handleValidation(){
        let name = this.state.user.name;
        let email = this.state.user.email; 
        let password = this.state.user.password; 
        let tempErrors={}
        let formValid = true; 
        if(!name){ //If name is not given
            formValid = false;
            tempErrors['name']='Name cannot be empty';
        }
        if(!email){ //If email is not given
            formValid = false;
            tempErrors['email']='Email cannot be empty';
        }
        if(!password){ //If password is not given
            formValid = false;
            tempErrors['password']='Password cannot be empty';
        }

        this.setState({
            errors: tempErrors
        });

        return formValid; 
    }
}