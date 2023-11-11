import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {getUser, postUsers} from "./asyncActions";

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
  isLogged: boolean
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
    addUsers: (state, action) => {
      state.users.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUsers.pending, (state) => {
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        // state.films.push(action.payload)
        state.user = action.payload;
        state.isLogged = true;

      })
      .addCase(postUsers.rejected, (state, action) => {
      })


  },
})


export const {increment,} = userSlice.actions

export default userSlice.reducer
