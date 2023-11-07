import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {getUsers} from "./asyncActions";

export type User = {
  email:string
  id:number
  name:string
  avatar_url:string

}

 type Users = {
  user?: User
  loading?:string
  error?:string
}

const initialState: Users = {
  user:undefined,
  loading:'',
  error:''
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
      .addCase(getUsers.pending, (state) => {
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        // state.films.push(action.payload)
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
      })


  },
})


export const {increment,} = userSlice.actions

export default userSlice.reducer
