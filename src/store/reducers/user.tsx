import { createSlice } from "@reduxjs/toolkit";
import { SeedType, UserDataType, UserInventoryType, UserStateType } from "../types";

const user = createSlice({
    name: 'user',
    initialState: {
        data: {} as UserDataType,
        inventory: {
            seeds: [] as SeedType[]
        } as UserInventoryType,
    } as UserStateType,
    reducers: { 
        setUserData (state: UserStateType, action) {
            Object.assign(state.data, action.payload);
        },
        setUserInventory (state: UserStateType, action) {
            Object.assign(state.inventory, action.payload);
        },
        addUserInventorySeeds (state: UserStateType, action) {
            state.inventory.seeds.push(action.payload);
        }
    }
})

export const { setUserData, setUserInventory, addUserInventorySeeds } = user.actions;
export default user.reducer;