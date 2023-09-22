import React from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from "../movieCard";

export const CatalogMoviesList = props => {
  return (

    <div className="catalog__movies-list">
      <MovieCard/>
    </div>

  );
};
