import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {postUser} from "./asyncActions";


export type User = {
  user: User;
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
    _: () => {
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.fulfilled, (state:User, action:PayloadAction<User>) => {
        state.user = action.payload;

      })
      .addCase(postUser.rejected, () => {
        console.log('Ошибка отправки пользователя')
      })


  },
})
export default userSlice.reducer
