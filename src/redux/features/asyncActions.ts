import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "./userSlice";
import {Comments} from "./commentsSlice";

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


export const fetchFilms = createAsyncThunk<Film[],undefined>(
  'filmsSlice/fetchFilms',
  async () =>{

  const {data} = await axios.get('https://6.react.pages.academy/wtw/films')
    .then(res =>{
      return res
    })
    .catch((e)=>{
      return e('Ошибка получения общих данных',)
    });

  return data

})

export const fetchCommentsGet = createAsyncThunk<Comments,number>(
  'commentsSlice/fetchCommentsGet',
  async (filmId,{rejectWithValue}) =>{

    const {data} = await axios.get(`https://6.react.pages.academy/wtw/comments/${filmId}`)
      .then(res =>{
        return res
      })
      .catch(()=>{
        return rejectWithValue('Ошибка получения комментариев',)
      });

    return data
  })



export const fetchCommentsPost = async ({id,starValue,comment})=>{
  await axios.post(`https://6.react.pages.academy/wtw/comments/${id}`,`"rating:"${starValue}, "comment":"${comment}"`)
    .then(res =>{
      return res

    })
    .catch(error=>{
      return error
    });
}





export const getUser = createAsyncThunk<User,undefined>(
  'userSlice/getUsers',
  async (_) =>{

    const {data} = await axios.get('https://6.react.pages.academy/wtw/login')
      .then(res =>{
        return res
      })
      .catch((e)=>{
        return e('Ошибка получения пользователя',)
      });

    return data
  })

export const postUser = createAsyncThunk<User,{"email":string,"password":string}>(
  'userSlice/postUsers',
  async (signInData) =>{

    const {data} = await axios.post('https://6.react.pages.academy/wtw/login',signInData)
      .then(res =>{
        return res
      })
      .catch((e)=>{
        return e('Ошибка отправки пользователя',)
      });

    localStorage.setItem("user",JSON.stringify(data))
    return data

  })

export const fetchPromo = createAsyncThunk<Film,undefined>(
  'promoSlice/fetchPromo',
  async (_) =>{

    const {data} = await axios.get('https://6.react.pages.academy/wtw/films/promo')
      .then(res =>{
        return res
      })
      .catch((e)=>{
        return e('Ошибка получения промо',)
      });


    return data
  })
