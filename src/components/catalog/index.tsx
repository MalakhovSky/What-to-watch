import React from 'react';
import {CatalogGenresList} from "../catalogGenresList";
import {CatalogMoviesList} from "../catalogMoviesList";
import {ShowMoreBtn} from "../showMoreBtn";

export const Catalog = () => {
  return (
    <div>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogGenresList/>
        <CatalogMoviesList/>
        <ShowMoreBtn/>
      </section>
    </div>
  );
};


