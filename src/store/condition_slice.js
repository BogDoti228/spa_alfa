import {createSlice} from "@reduxjs/toolkit";


const condition_slice = createSlice({
    name: "conditions",
    initialState: {
        header: "Free Anime Gifs",
        catalog: "Catalog",
        filter: "Sort by likes",
        footer_first: "I hope you didn't lose your mind from this amazing gifs.",
        footer_second: "Thanks for visiting this SPA. =)"
    },
    reducers : {
        change_filter : ((state, action) => {
            if (action.payload) {
                state.filter = "Sort by index"
            }
            else {
                state.filter = "Sort by likes"
            }
        })
    }
})

export const condition_reducer = condition_slice.reducer
export const {change_filter} = condition_slice.actions