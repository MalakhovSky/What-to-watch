import React from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from "../movieCard";
import {films} from "../../mocks/films";

export const CatalogMoviesList = props => {
  return (

    <div className="catalog__movies-list">
      {films.map((obj:any,index) => (
        <MovieCard key = {obj.id}
                   name = {obj.name}
                   prevImg={obj.preview_image}
                   posterImage={obj.poster_image}/>
      ))}

    </div>

  );
};
