import { createSlice } from "@reduxjs/toolkit";
import { UserStateType } from "../types";

const user = createSlice({
    name: 'user',
    initialState: {} as UserStateType,
    reducers: { 
        setUserName (state: UserStateType, action: any) {
            state.name = action.payload;
        },
    }
})

export const { setUserName } = user.actions;
export default user.reducer;