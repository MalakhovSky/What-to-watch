import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {getUser, postUser} from "./asyncActions";
import {filmsSlice} from "./filmsSlice";

export type User = {
  email: string
  id: number
  name: string
  avatar_url: string
  loading?: string
  error?: string

}

type Users = {
  user?: User
  loading?: string
  error?: string
  isLogged?: boolean
}

const initialState: Users = {
  user: undefined,
  loading: '',
  error: '',
  isLogged:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLogged: (state, action:PayloadAction<boolean>) => {
      state.isLogged = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.fulfilled, (state, action:PayloadAction<User>) => {
        state.user = action.payload;
        console.log(state.user,'user')

      })
      .addCase(postUser.rejected, () => {
        console.log('Ошибка отправки пользователя')
      })


  },
})
export const {isLogged} = userSlice.actions
export default userSlice.reducer
