import { Component } from "react";
import { connect } from "react-redux";
import {listTodo} from '../store/action/todo'
export  class TodoRedux extends Component{
    constructor(props){
        super(props);

        this.state={
             
        }
    }

    componentDidMount(){
        //call the API : call the ACTION 
        this.props.getAllTodos(); 
    }

    render(){
        return(
            <div>
                <h1>All Todos coming from the Store</h1>
                 {
                    this.props.todoList.list.map((t,index)=>(
                        <div>
                            <li key={index}>{t.title}</li>
                        </div>
                    ))
                 }
            </div>
        )
    }
    
};

function mapStateToProps(state){
    return {
        todoList : state.listTodo
    }    
}

export default connect(mapStateToProps, {listTodo})(TodoRedux); 