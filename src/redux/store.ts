import { configureStore } from '@reduxjs/toolkit'
import filmsSliceReducer from "./features/filmsSlice";
import commentsReducer from "./features/commentsSlice";

export const store = configureStore({
  reducer: {
    films:filmsSliceReducer,
    comments:commentsReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
