import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {MovieCard} from "../movieCard";
import {Paths} from "../../router/paths";
import {useAppSelector} from "../../redux/hooks/useAppDispatch";

export const CatalogMoviesList = props => {
  const films = useAppSelector(state=> state.films.films)
  console.log(films,films[0],'ЭТО ДАТА')


  return (

    <div className="catalog__movies-list">
      {films.map((obj: any, index) => (
        <MovieCard key={obj.id}
                   name={obj.name}
                   prevVideo={obj.preview_video_link}
                   id={obj.id}
                   prevImage={obj.preview_image}/>
      ))}

    </div>

  );
};
