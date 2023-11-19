import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import filmsSliceReducer from "./features/filmsSlice";
import commentsReducer from "./features/commentsSlice";
import usersReducer from "./features/userSlice"
import promoReducer from "./features/promoSlice"

const rootReducer = combineReducers({
  films: filmsSliceReducer,
  comments: commentsReducer,
  users: usersReducer,
  promo: promoReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['users','films']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    }),
})

export const persistor = persistStore(store)
export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
