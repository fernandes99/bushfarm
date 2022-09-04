import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: 'global',
    initialState: {
        loading: true as boolean,
        modal: {
            open: true as boolean,
            type: "shop" as "shop" | "transactions" | "inventory",
        },
        audios: {
            enable: true,
            background: true
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
        },

        enableAudio (state, action) {
            state.audios.enable = action.payload;
        }
    }
})

export const { setLoading, openModal, closeModal, enableAudio } = global.actions;
export default global.reducer;