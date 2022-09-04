import { createSlice } from "@reduxjs/toolkit";
import { PlatationGeneralStateType } from "../types";

const plantationList = createSlice({
    name: 'plantationList',
    initialState: [] as PlatationGeneralStateType[],
    reducers: { 
        setPlantationList (state: PlatationGeneralStateType[], action) {
            Object.assign(state, action.payload);
        },
    }
})

export const { setPlantationList } = plantationList.actions;
export default plantationList.reducer;