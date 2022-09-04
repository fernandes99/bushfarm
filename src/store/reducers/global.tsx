import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: 'global',
    initialState: {
        loading: true as boolean,
        modal: {
            open: false as boolean,
            type: "shop" as "shop" | "transactions" | "inventory",
        }
    },
    reducers: {
        setLoading (state: any, action: any) {
            state.loading = action.payload;
        },

        openModal (state, action) {
            state.modal.open = true;
            state.modal.type = action.payload; 
        },

        closeModal (state, action) {
            state.modal.open = false;
        }
    }
})

export const { setLoading, openModal, closeModal } = global.actions;
export default global.reducer;