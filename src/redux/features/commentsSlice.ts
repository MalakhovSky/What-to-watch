import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {fetchCommentsGet} from "./asyncActions";


type Comment = {
  id: number,
  user: {
    id: number,
    name: string
  }
  rating: number,
  comment: string,
  date: string
}

export type Comments = {
  comments: Comment[]
}
const initialState: Comments = {
  comments:[],
}


export const CommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    _: () => {
    }
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCommentsGet.fulfilled, (state:Comments, action: PayloadAction<Comments>) => {
        state.comments = action.payload
      })
      .addCase(fetchCommentsGet.rejected, () => {
        console.log(('Ошибка получения коментариев'))
      })


  },
})



export default CommentsSlice.reducer
