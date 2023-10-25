import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {MovieCard} from "../movieCard";
import {Paths} from "../../router/paths";
import {useAppSelector} from "../../redux/hooks/useAppDispatch";
import {ShowMoreBtn} from "../showMoreBtn";

export const CatalogMoviesList = props => {
  const films = useAppSelector(state => state.films.films)
  console.log(films, 'ЭТО ДАТА')

  const [counter, setCounter] = useState(8);
  const renderFilms = films.slice(0, counter);


  const moreFilms = () => {
    setCounter(counter + 8)
  }

  return (
    <div>
      <div className="catalog__movies-list">
        {renderFilms.map((obj: any, index) => (
          <MovieCard key={obj.id}
                     name={obj.name}
                     prevVideo={obj.preview_video_link}
                     id={obj.id}
                     prevImage={obj.preview_image}/>
        ))}

      </div>
      {
        renderFilms.length === films.length ? <div></div>:
          <div onClick={() => moreFilms()}>
            <ShowMoreBtn/>
          </div>
      }


    </div>

  );
};
