import { Component } from "react";

export default class Arry extends Component{

    i=1;
    constructor(){
        super(); //call Parent component constructor pls... 
        this.state={
            nums: [11,2,13,5,7,6,4,8] 
           
        }
    }

    render(){
        return(
            <div>
                <h1>Array Element</h1>
                {
                    this.state.nums.map(e=>(
                       <li key={this.i++}> {e} </li>
                    ))
                }
            </div>
        );
    }
}

/*
    (e)=>(
        {e}
    )
        --OR--
    e=>(
        {e}
    )
*/