import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {fetchFilms, Film} from "./asyncActions";

export interface Films {
  films:Film[],
  loading?:string
  error?:string
}

const initialState: Films = {
  films:[],
  loading:'',
  error:''
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.films.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
      })
      .addCase(fetchFilms.fulfilled, (state, action:PayloadAction<Film[]>) => {
        console.log(action.payload,"LEXA")
        // state.films.push(action.payload)
        state.films = action.payload
      })
      .addCase(fetchFilms.rejected, (state, action) => {
      })

  },
})


export const {increment,} = filmsSlice.actions

export default filmsSlice.reducer
