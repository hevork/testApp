import customersDataReducer from "./reducers/customersDataReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  customersDataReducer
});

function makeStore() {
  return configureStore({
    reducer: rootReducer
  });
}

export const store = makeStore();
