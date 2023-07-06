import { createSlice } from "@reduxjs/toolkit"

const burgerMenu = createSlice({
    name: 'burgerMenu',
    initialState: {
        burgerOpen: false
    },
    reducers: {
        openAndCloseBurger(state) {
            !state.burgerOpen ? state.burgerOpen = true : state.burgerOpen = false
        }

    }
})


export default burgerMenu.reducer
export const {  openAndCloseBurger} = burgerMenu.actions