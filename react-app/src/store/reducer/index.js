import { combineReducers } from "@reduxjs/toolkit";
import todo from './todo';
import employee from './employee';
import department from './department';
import login from './login';

export default combineReducers({todo,employee,department,login})