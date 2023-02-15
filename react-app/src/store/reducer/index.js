import { combineReducers } from "@reduxjs/toolkit";
import todo from './todo';
import employee from './employee';

export default combineReducers({todo,employee})