import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {fetchFilms, fetchPromo, Film} from "./asyncActions";

export interface Promo {
  promo:Film | undefined,
  loading?:string
  error?:string
}

const initialState: Promo = {
  promo:undefined,
  loading:'',
  error:''
}

export const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.promo.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromo.pending, (state) => {
      })
      .addCase(fetchPromo.fulfilled, (state, action:PayloadAction<Film[]>) => {
        state.promo = action.payload
      })
      .addCase(fetchPromo.rejected, (state, action) => {
      })

  },
})


export const {increment,} = promoSlice.actions

export default promoSlice.reducer
