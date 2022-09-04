import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducers/global";
import userReducer from "./reducers/user";
import plantationList from "./reducers/plantationList";

const reducer = combineReducers({
    global: globalReducer,
    user: userReducer,
    plantationList: plantationList,
});

const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;