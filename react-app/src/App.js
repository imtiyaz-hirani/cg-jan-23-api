import { Component } from "react";
import Arry from "./components/Arry";
import Emp from "./components/Emp";

export default class App extends Component{
 
  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
           <Arry  />
           <hr />
           <Emp />
        </div>
    );
  }
}
