import { createSlice } from "@reduxjs/toolkit";
import { mockPlantationList } from "../mocks";
import { PlatationGeneralStateType } from "../types";

const plantationList = createSlice({
    name: 'plantationList',
    initialState: mockPlantationList() as PlatationGeneralStateType[],
    reducers: {
        setPlantationList (state: PlatationGeneralStateType[], action) {
            Object.assign(state, action.payload);
        },
    }
})

export const { setPlantationList } = plantationList.actions;
export default plantationList.reducer;