import React from 'react';
import {CatalogMoviesList} from "../catalogMoviesList";
import {Film} from "../../redux/features/asyncActions";


type PropsTypes = {
  films:Film[],
  genre:string
}

const MoviesLikeThis:React.FC = ({films,genre}:PropsTypes) => {

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <CatalogMoviesList films={films.filter((film)=>film.genre === genre)}/>
    </section>
  );
};

export default MoviesLikeThis;
