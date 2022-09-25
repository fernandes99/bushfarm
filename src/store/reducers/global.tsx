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
        },
        notify: {
            show: false as boolean,
            message: '' as string,
            type: '' as string
        },
        slot: {
            selected: false as boolean,
            value: 0 as number,
        }
    },
    reducers: {
        setLoading (state, action) {
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
        },

        setNotify (state, action) {
            state.notify.show = action.payload.show,
            state.notify.message = action.payload.message,
            state.notify.type = action.payload.type
        },

        setSlotSelected (state, action) {
            state.slot.selected = action.payload.selected;
            state.slot.value = action.payload.value;
        }
    }
})

export const { setLoading, openModal, closeModal, enableAudio, setNotify } = global.actions;
export default global.reducer;