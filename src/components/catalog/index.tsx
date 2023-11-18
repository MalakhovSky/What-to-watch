import React from 'react';
import {CatalogGenresList} from "../catalogGenresList";
import {CatalogMoviesList} from "../catalogMoviesList";
import {ShowMoreBtn} from "../showMoreBtn";
import {useAppSelector} from "../../redux/hooks/useAppDispatch";
import {INIT_GENRES} from "../../consts";
import {Film} from "../../redux/features/asyncActions";

type PropsTypes = {
  films:Film[]
}

export const Catalog: React.FC = ({films}:PropsTypes) => {

  const currentGenre = useAppSelector(state => state.films.currentGenre)

  return (
    <div>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogGenresList films={films}/>
        <CatalogMoviesList
          films={currentGenre === INIT_GENRES ?
          films
          :
          films.filter((film)=>film.genre === currentGenre)}/>
      </section>
    </div>
  );
};


