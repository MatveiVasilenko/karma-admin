import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { streamApi } from './../services/StreamService';


export const rootReducer = combineReducers({
    [streamApi.reducerPath]: streamApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(streamApi.middleware)
})