import React from 'react';
import {CatalogMoviesList} from "../catalogMoviesList";
import {Film} from "../../redux/features/asyncActions";
import {useAppSelector} from "../../redux/hooks/useAppDispatch";
import {INIT_GENRES} from "../../consts";

type PropsTypes = {
  films:Film[],
  genre:string
}

const MoviesLikeThis = ({films,genre}:PropsTypes) => {


  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <CatalogMoviesList films={films.filter((film)=>film.genre === genre)}/>
    </section>
  );
};

export default MoviesLikeThis;
