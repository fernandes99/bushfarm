import { createSlice } from "@reduxjs/toolkit";
import { mocks } from "../mocks";
import { UserStateType } from "../types";

const user = createSlice({
    name: 'user',
    initialState: mocks.user as UserStateType,
    reducers: { 
        setUserName (state: UserStateType, action: any) {
            state.name = action.payload;
        },
    }
})

export const { setUserName } = user.actions;
export default user.reducer;