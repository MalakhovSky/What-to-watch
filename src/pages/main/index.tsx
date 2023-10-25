import React, {useEffect} from 'react';
import {CatalogMoviesList} from "../../components/catalogMoviesList";
import {CatalogGenresList} from "../../components/catalogGenresList";
import {PageFooter} from "../../components/pageFooter";
import {ShowMoreBtn} from "../../components/showMoreBtn";
import {MovieHeader} from "../../components/movieHeader";
import {Catalog} from "../../components/catalog";
import {films} from '../../mocks/films'
import {fetchFilms} from "../../redux/features/asyncActions";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {AppDispatch} from "../../redux/store";


export const Main = props => {
  const dispatch = useAppDispatch()

  useEffect(() => {
   dispatch(fetchFilms())
  },[dispatch] );


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

