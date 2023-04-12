import { configureStore } from "@reduxjs/toolkit";
import petsReducer from './animals'
import userReducer from './user'

export default configureStore({
  reducer: {
    pets: petsReducer,
    user: userReducer
  }
})