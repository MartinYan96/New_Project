import { createSlice } from "@reduxjs/toolkit"

const searchWindowActive = createSlice({
    name: 'search',
    initialState: {
        searchWindowOpen: false
    },
    reducers: {
        openSearch(state) {
            state.searchWindowOpen = true
        },

        closeSearch(state) {
            state.searchWindowOpen = false
        }

    }
})


export default searchWindowActive.reducer
export const { openSearch, closeSearch } = searchWindowActive.actions