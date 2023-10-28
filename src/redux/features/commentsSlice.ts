import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {fetchCommentsGet, fetchFilms, Film} from "./asyncActions";
import {Films} from "./filmsSlice";

interface Comment {
  id: number
  user: {
    id: number
    name: string
  }
  rating: number
  comment: string
  date: string
}

export interface Comments {
  comments: Comment[]
  loading?: string
  error?: string
}
const initialState: Comments = {
  comments:[],
  loading:'',
  error:''
}


export const CommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.comments.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsGet.pending, (state) => {
      })
      .addCase(fetchCommentsGet.fulfilled, (state, action: PayloadAction<Film[]>) => {
        console.log(action.payload, "LEXA")
        // state.films.push(action.payload)
        state.comments = action.payload
      })
      .addCase(fetchCommentsGet.rejected, (state, action) => {
      })

  },
})


export const {increment,} = CommentsSlice.actions

export default CommentsSlice.reducer
