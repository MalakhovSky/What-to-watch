import { configureStore } from '@reduxjs/toolkit'
import filmsSliceReducer from "./features/filmsSlice";

export const store = configureStore({
  reducer: {
    films:filmsSliceReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
