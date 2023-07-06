import { createSlice } from "@reduxjs/toolkit"
import { textsEng, textsArm, textsRus } from '../../resources/textAndLanguage/textAndLanguage'

const selectAndToggleLanguages = createSlice({
    name: 'selectAndToggleLanguages',
    initialState: {
        language: textsArm
    },

    reducers: {
        arm(state) {
           state.language = textsArm
        },
        rus(state) {
        state.language = textsRus
        },
        eng(state) {
           state.language = textsEng
        }

    }
})


export default selectAndToggleLanguages.reducer
export const { arm, rus, eng } = selectAndToggleLanguages.actions