import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "./userSlice";

export type Film = {
  id:number,
  name:string,
  poster_image:string,
  preview_image:string,
  background_image:string,
  background_color:string,
  video_link:string,
  preview_video_link:string,
  description:string,
  rating:number,
  scores_count:number,
  director:string,
  starring:string[],
  run_time:number,
  genre:string,
  released:number,
  is_favorite:boolean,
}
// fetchFilms()

export const fetchFilms = createAsyncThunk<Film[],undefined,{rejectValue:string}>(
  'filmsSlice/fetchFilms',
  async (_,{rejectWithValue}) =>{

  const {data} = await axios.get('https://6.react.pages.academy/wtw/films')
    .then(res =>{
      return res
    })
    .catch(error=>{
      return rejectWithValue('Ошибка получения общих данных',)
    });

  return data

})

export const fetchCommentsGet = createAsyncThunk<Film[],undefined,{rejectValue:string}>(
  'commentsSlice/fetchCommentsGet',
  async (filmId,{rejectWithValue}) =>{

    const {data} = await axios.get(`https://6.react.pages.academy/wtw/comments/${filmId}`)
      .then(res =>{
        return res
      })
      .catch(error=>{
        return rejectWithValue('Ошибка получения комментариев',)
      });

    console.log(data,'Комменты')
    return data
  })

export const getUser = createAsyncThunk<User,undefined,{rejectValue:string}>(
  'userSlice/getUsers',
  async (_,{rejectWithValue}) =>{

    const {data} = await axios.get('https://6.react.pages.academy/wtw/login')
      .then(res =>{
        return res
      })
      .catch(error=>{
        return rejectWithValue('Ошибка получения пользователя',)
      });

    console.log(data,'Логин')
    return data
  })

export const postUsers = createAsyncThunk<Film[],undefined,{rejectValue:string}>(
  'commentsSlice/fetchCommentsGet',
  async (signInData,{rejectWithValue}) =>{
    console.log(signInData,'tutDataSing')

    const {data} = await axios.post('https://6.react.pages.academy/wtw/login',signInData)
      .then(res =>{
        return res
      })
      .catch(error=>{
        return rejectWithValue('Ошибка получения пользователя',)
      });

    console.log(data,'ЛогинPOST')
    localStorage.setItem("user",JSON.stringify(data))
    return data

  })
