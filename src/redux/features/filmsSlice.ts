import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {fetchFilms, Film} from "./asyncActions";
import {INIT_GENRES} from "../../consts";

export interface Films {
  films:Film[]
  myFilms:Film[]
  currentGenre: string
  loading?:string
  error?:string
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
    setCurrentGenre: (state, action) => {
      state.currentGenre = action.payload
      console.log(state.currentGenre,'CURRENT GENRE')
    },
    addMyFilm:(state, action) => {
      const isFilm = state.myFilms.find((obj) => obj.id === action.payload.id)
      if(!isFilm){
        state.myFilms.push(action.payload)
      }

      console.log(state.myFilms,'МОИ ФИЛЬМЕС')
    },

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


export const {addMyFilm,setCurrentGenre,filteredGenres} = filmsSlice.actions

export default filmsSlice.reducer
