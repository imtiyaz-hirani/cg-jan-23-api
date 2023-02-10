import { Component } from "react";

export default class SignUp  extends Component{

    constructor(){
        super();

        this.state={
                user: {
                    name: '',
                    email: '',
                    password: ''
                }
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
                <br /><br />
                <label>Enter Email: </label>
                <input type="text" 
                        name="email"
                        value={this.state.user.email}
                        onChange={this.changeHandler} />
                <br /><br />
                <label>Enter password: </label>
                <input type="password" 
                        name="password"
                        value={this.state.user.password}
                        onChange={this.changeHandler} />
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
        console.log(this.state.user)
    }
}