import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {fetchFilms, Film} from "./asyncActions";
import {INIT_GENRES} from "../../consts";

export interface Films {
  films:Film[],
  myFilms:Film[],
  currentGenre: string,
  loading?:string,
  error?:string,
}

const initialState: Films = {
  currentGenre: INIT_GENRES,
  myFilms:[],
  films:[],
  loading:'',
  error:''
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setCurrentGenre: (state:Films, action:PayloadAction<string>) => {
      state.currentGenre = action.payload
    },
    addMyFilm:(state:Films, action:PayloadAction<Film>) => {
      const isFilm = state.myFilms.find((obj) => obj.id === action.payload.id)
      if(!isFilm){
        state.myFilms.push(action.payload)
      }
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state:Films, action:PayloadAction<Film[]>) => {
        state.films = action.payload
      })
      .addCase(fetchFilms.rejected, () => {
        console.log('ошибка получения фильмов')
      })

  },
})


export const {addMyFilm,setCurrentGenre} = filmsSlice.actions

export default filmsSlice.reducer
