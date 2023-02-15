import { Component } from "react";
  import User from "./components/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "./components/Post";
import SignUp from "./components/SignUp";
import {   Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/navbar";
import TodoRedux from "./components/todoRedux";
import { Provider } from "react-redux";
import {store} from "./store";
import Employee from "./components/Employee";
import './App.css';

export default class App extends Component{
 
  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
          <Provider store={store}> 
          <NavBar />
          <Routes>
            <Route path="/" element={ <TodoRedux />} /> 
            <Route path="/posts" element={ <Post />} /> 
            <Route path="/employee" element={ <Employee />} /> 
            <Route path="/sign-up" element={ <SignUp />} /> 
            <Route path="/users" element={ <User />} /> 
            <Route path="*" element={ <PageNotFound />} />
          </Routes>
          </Provider>
        </div>
    );
  }
}
