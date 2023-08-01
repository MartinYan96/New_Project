import { createSlice } from "@reduxjs/toolkit"
import data from '../../resources/data/data';


const selectAndToggleLanguages = createSlice({
    name: 'selectAndToggleLanguages',
    initialState: {
        language:data().data.languages.arm
    },

    reducers: {
        arm(state) {
            state.language = data().data.languages.arm
        },
        rus(state) {
            state.language = data().data.languages.rus
        },
    }
})


export default selectAndToggleLanguages.reducer
export const { arm, rus } = selectAndToggleLanguages.actions