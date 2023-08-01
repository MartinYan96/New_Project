import { createSlice } from "@reduxjs/toolkit"

const filterBarActive = createSlice({
    name: 'filtersBar',

    initialState: {
        filterBarActive: false
    },

    reducers: {
        closeAndOpenFiltersBar(state) {
            !state.filterBarActive ? state.filterBarActive = true : state.filterBarActive = false
        }

    }
})


export default filterBarActive.reducer
export const { closeAndOpenFiltersBar } = filterBarActive.actions