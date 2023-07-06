import { combineReducers, configureStore } from '@reduxjs/toolkit'
import closeAndOpenBugerMenu from './closeAndOpenBugerMenu'
import selectAndToggleLanguages from './selectAndToggleLanguage'

const rootReducer = combineReducers({
    burger: closeAndOpenBugerMenu,
    language: selectAndToggleLanguages
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production' ? true : false
})