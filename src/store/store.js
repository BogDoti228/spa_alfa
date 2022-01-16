import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {fetch_reducer} from "./fetch_slice";
import {controller_reducer} from "./state_controller_slice";
import {condition_reducer} from "./condition_slice";

const rootReducer = combineReducers({
    fetch_reducer: fetch_reducer,
    controller_reducer: controller_reducer,
    condition_reducer: condition_reducer
})

export const store = configureStore({
    reducer: rootReducer,
});