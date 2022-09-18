import { createSlice } from "@reduxjs/toolkit";
import { mockPlantationList } from "../mocks";
import { PlatationGeneralStateType } from "../types";

const plantationList = createSlice({
    name: 'plantationList',
    initialState: mockPlantationList() as PlatationGeneralStateType[],
    reducers: {
        setPlantationList (state: PlatationGeneralStateType[], action) {
            const data = state.map((item: PlatationGeneralStateType) => {
                const slot = action.payload.find((field: PlatationGeneralStateType) => field.slot === item.slot);
                return slot ? slot : item;
            });

            Object.assign(state, data);
        },
    }
})

export const { setPlantationList } = plantationList.actions;
export default plantationList.reducer;