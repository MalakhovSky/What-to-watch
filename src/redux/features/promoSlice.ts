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
    setPromo: () => {
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromo.pending, (state) => {
      })
      .addCase(fetchPromo.fulfilled, (state, action:PayloadAction<Film>) => {
        state.promo = action.payload
      })
      .addCase(fetchPromo.rejected, (state, action) => {
        console.log('Ошибка получения промо фильма')
      })

  },
})



export default promoSlice.reducer
