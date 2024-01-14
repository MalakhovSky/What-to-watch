import { createAsyncThunk } from "@reduxjs/toolkit";
import {User} from "./userSlice";
import {Comments} from "./commentsSlice";
import api from "./api";

export type Film = {
  promo: Film;
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

  const {data} = await api.get('films')
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
  async (filmId) =>{

    const {data} = await api.get(`comments/${filmId}`)
      .then(res =>{
        return res
      })
      .catch((e)=>{
        return e('Ошибка получения комментариев',)
      });

    return data
  })



export const fetchCommentsPost = async ({id,starValue,comment})=>{
  console.log('FETCH')
  await api.post(`comments/${id}`,`"rating:"${starValue}, "comment":"${comment}"`)
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

    const {data} = await api.get('login')
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

    const {data} = await api.post('login',signInData,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
      .then(res =>{
        return res
      })
      .catch((e)=>{
        return e('Ошибка отправки пользователя',)
      });
    return data

  })

export const fetchPromo = createAsyncThunk<Film,undefined>(
  'promoSlice/fetchPromo',
  async (_) =>{

    const {data} = await api.get('films/promo')
      .then(res =>{
        return res
      })
      .catch((e)=>{
        return e('Ошибка получения промо',)
      });


    return data
  })
