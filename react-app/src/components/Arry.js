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

                <br />
                <button onClick={()=>(this.sortArry('ASC'))}>Sort-ASC</button> 
                <button onClick={()=>(this.sortArry('DESC'))}>Sort-DESC</button>
            </div>
        );
    }

    sortArry(direction){
        let temp=[];
        switch(direction){
            case 'ASC':
                temp = this.state.nums.sort((a, b) => a - b); 
                break; 
            case 'DESC':
                temp = this.state.nums.sort((a, b) => b - a); 
                break;
            default:
                break;
        }

        this.setState({
            nums: temp
        });
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