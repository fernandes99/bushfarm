import { createSlice } from "@reduxjs/toolkit";
import { UserDataType, UserInventoryType, UserStateType } from "../types";

const user = createSlice({
    name: 'user',
    initialState: {
        data: {} as UserDataType,
        inventory: {} as UserInventoryType,
    } as UserStateType,
    reducers: { 
        setUserData (state: UserStateType, action) {
            Object.assign(state.data, action.payload);
        },
        setUserInventory (state: UserStateType, action) {
            Object.assign(state.inventory, action.payload);
        }
    }
})

export const { setUserData, setUserInventory } = user.actions;
export default user.reducer;