import React from 'react';
import {CatalogGenresList} from "../catalogGenresList";
import {CatalogMoviesList} from "../catalogMoviesList";
import {ShowMoreBtn} from "../showMoreBtn";
import {useAppSelector} from "../../redux/hooks/useAppDispatch";

export const Catalog = () => {

  const films = useAppSelector(state => state.films.films)

  return (
    <div>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogGenresList films={films}/>
        <CatalogMoviesList />
      </section>
    </div>
  );
};


