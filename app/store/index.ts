import { configureStore } from '@reduxjs/toolkit'
// import userReducer from "../store/userStore"
// import basketReducer from "../store/basketStore"

export const store = configureStore({
    reducer: {
        // user: userReducer,
        // basket: basketReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch