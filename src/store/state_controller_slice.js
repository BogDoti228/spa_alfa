import {createSlice} from "@reduxjs/toolkit";



const state_controller_slice = createSlice({
    name: "controller",
    initialState: {
        objects: [],
        filtered: false
    },
    reducers: {
        save_object : (state, action) => {
            state.objects.push({
                index: action.payload.index,
                like: action.payload.like,
                dislike: action.payload.dislike
            })
        },
        update_filter : (state, action) => {
            state.filtered = action.payload
        },
        delete_like : (state, action) => {
            const index = action.payload
            state.objects = state.objects.filter(x => x.index !== index || !x.like)
        }
    }
})

export const controller_reducer = state_controller_slice.reducer
export const {save_object, update_filter, delete_like} = state_controller_slice.actions