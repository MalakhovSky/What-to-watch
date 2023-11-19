import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {fetchCommentsGet, fetchCommentsPost, fetchFilms, Film} from "./asyncActions";
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

export type Comments = {
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
    increment: () => {
    }
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCommentsGet.fulfilled, (state, action: PayloadAction<Comments>) => {
        state.comments = action.payload
      })
      .addCase(fetchCommentsGet.rejected, () => {
        console.log(('Ошибка получения коментариев'))
      })


  },
})



export default CommentsSlice.reducer
