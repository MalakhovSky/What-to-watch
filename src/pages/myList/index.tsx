import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from "../../components/logo";
import {Avatar} from "../../components/avatar";
import {Catalog} from "../../components/catalog";
import {PageFooter} from "../../components/pageFooter";
import {CatalogGenresList} from "../../components/catalogGenresList";
import {CatalogMoviesList} from "../../components/catalogMoviesList";
import {ShowMoreBtn} from "../../components/showMoreBtn";

type PropsType = {

}

export const MyList = props => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogGenresList/>
        <CatalogMoviesList/>
      </section>

      <div>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};



