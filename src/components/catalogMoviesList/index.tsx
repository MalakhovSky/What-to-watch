import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {MovieCard} from "../movieCard";
import {films} from "../../mocks/films";
import {Paths} from "../../router/paths";

export const CatalogMoviesList = props => {


  return (

    <div className="catalog__movies-list">
      {films.map((obj: any, index) => (
        <MovieCard key={obj.id}
                   name={obj.name}
                   prevVideo={obj.preview_video_link}
                   id={obj.id}
                   posterImage={obj.poster_image}/>
      ))}

    </div>

  );
};
