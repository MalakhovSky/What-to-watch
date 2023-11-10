import React, {useEffect, useState} from 'react';
import {CatalogMoviesList} from "../../components/catalogMoviesList";
import {CatalogGenresList} from "../../components/catalogGenresList";
import {PageFooter} from "../../components/pageFooter";
import {ShowMoreBtn} from "../../components/showMoreBtn";
import {MovieHeader} from "../../components/movieHeader";
import {Catalog} from "../../components/catalog";
import {films} from '../../mocks/films'
import {fetchFilms, getUser, postUsers} from "../../redux/features/asyncActions";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {AppDispatch} from "../../redux/store";


export const Main = props => {
  const dispatch = useAppDispatch()
  const [sortedGenres, setSortedGenres] = useState([]);

  useEffect(() => {
   dispatch(fetchFilms())
  },[dispatch] );


  const films = useAppSelector(state => state.films.films)
  const user = useAppSelector(state => state.users.user)
  console.log(user,'ЮЗЭР_____________________')

  return (
    <div>
      <MovieHeader/>
      <div className="page-content">
        <Catalog/>
        <PageFooter/>
      </div>
    </div>
  );
};

