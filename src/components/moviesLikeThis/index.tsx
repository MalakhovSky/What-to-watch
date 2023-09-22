import React from 'react';
import {CatalogMoviesList} from "../catalogMoviesList";

const MoviesLikeThis = () => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <CatalogMoviesList/>
    </section>
  );
};

export default MoviesLikeThis;
