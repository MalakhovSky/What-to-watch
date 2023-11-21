import React, {useEffect} from 'react';
import {Logo} from "../../components/logo";
import {Avatar} from "../../components/avatar";
import {CatalogGenresList} from "../../components/catalogGenresList";
import {CatalogMoviesList} from "../../components/catalogMoviesList";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {fetchFilms} from "../../redux/features/asyncActions";
import {INIT_GENRES} from "../../consts";


export const MyList = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchFilms())
  }, [dispatch]);

  const myFilms = useAppSelector(state => state.films.myFilms)
  const films = useAppSelector(state => state.films.films)
  const currentGenre = useAppSelector(state => state.films.currentGenre)


  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogGenresList films={films}/>
        <CatalogMoviesList
          films={currentGenre === INIT_GENRES ?
            myFilms
            :
            myFilms.filter((myFilms)=>myFilms.genre === currentGenre)}/>
      </section>

      <div>
        <footer className="page-footer">
          <div className="logo">
            <div data-cy="logo" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </div>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};



