import {createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import gf from "../api/giphy_api";

export const fetch_gifs_api = createAsyncThunk('fetch_gifs', async () => {
    const { data: gifs } = await gf.search('rengoku', {limit: 42});
    return gifs;
})

export const fetch_slice = createSlice({
    name: "gifs",
    initialState: {
        init_gifs_objs: [],
        gifs_objs: []
    },
    reducers: {
        filter_gifs: (state, action) => {
            const objects = action.payload
            state.gifs_objs = state.gifs_objs.map((obj) => {
                const obj_n = objects.find(k => k.index === obj.index)
                if (obj_n !== undefined && obj_n.like) {
                    console.log("find")
                    return {gif: obj.gif, index: obj.index, filter: true}
                }
                else {
                    console.log("not find")
                    return {gif: obj.gif, index: obj.index, filter: false}
                }
            })
        },
        back_gifs: (state) => {
            state.gifs_objs = state.init_gifs_objs
        }
    },
    extraReducers: {
        [fetch_gifs_api.fulfilled]: (state, action) => {
            state.init_gifs_objs = action.payload.map((gif, index) => {
                return {gif: gif, index: index, filter: false}
            })
            state.gifs_objs = state.init_gifs_objs
        }
    }
})

export const fetch_reducer = fetch_slice.reducer;
export const {filter_gifs, back_gifs} = fetch_slice.actions