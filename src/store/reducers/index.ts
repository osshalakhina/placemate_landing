import {combineReducers} from 'redux';
import counterReducer from "@/store/reducers/counterReducer.tsx";
import userReducer from "@/store/reducers/userReducer.tsx";
import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "@/store/reducers/todoReducer.tsx";

const rootReducer = combineReducers({
  userReducer,
  counterReducer,
  todoReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store

export type ApplicationState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
