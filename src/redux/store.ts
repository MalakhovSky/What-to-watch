import { configureStore } from '@reduxjs/toolkit'
import filmsSliceReducer from "./features/filmsSlice";
import commentsReducer from "./features/commentsSlice";
import usersReducer from "./features/userSlice"
import promoReducer from "./features/promoSlice"

export const store = configureStore({
  reducer: {
    films:filmsSliceReducer,
    comments:commentsReducer,
    users: usersReducer,
    promo : promoReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
