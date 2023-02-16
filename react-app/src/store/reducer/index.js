import { combineReducers } from "@reduxjs/toolkit";
import todo from './todo';
import employee from './employee';
import department from './department';

export default combineReducers({todo,employee,department})