import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";
import weatherReducer from "./weatherSlice"; // Import Weather Reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    weather: weatherReducer, // Add Weather Reducer
  },
});

export default store;
