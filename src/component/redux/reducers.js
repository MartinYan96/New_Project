import { combineReducers, configureStore } from '@reduxjs/toolkit'
import closeAndOpenBugerMenu from './closeAndOpenBugerMenu'
import selectAndToggleLanguages from './selectAndToggleLanguage'
import closeAndOpenFiltersBar from './closeAndOpenFiltersBar'
import closeAndOpenSearchWindow from './closeAndOpenSearchWindow'

const rootReducer = combineReducers({
    burger: closeAndOpenBugerMenu,
    language: selectAndToggleLanguages,
    filters: closeAndOpenFiltersBar,
    search: closeAndOpenSearchWindow
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production' ? true : false
})