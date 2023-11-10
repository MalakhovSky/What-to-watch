import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {getUser} from "./asyncActions";

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
      .addCase(getUser.pending, (state) => {
      })
      .addCase(getUser.fulfilled, (state, action) => {
        // state.films.push(action.payload)
        state.user = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
      })


  },
})


export const {increment,} = userSlice.actions

export default userSlice.reducer
