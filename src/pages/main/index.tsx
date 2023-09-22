import React from 'react';
import {CatalogMoviesList} from "../../components/catalogMoviesList";
import {CatalogGenresList} from "../../components/catalogGenresList";
import {PageFooter} from "../../components/pageFooter";
import {ShowMoreBtn} from "../../components/showMoreBtn";
import {MovieHeader} from "../../components/movieHeader";
import {Catalog} from "../../components/catalog";


export const Main = props => {
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

