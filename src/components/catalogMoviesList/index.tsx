import React, {useState} from 'react';
import {MovieCard} from "../movieCard";
import {ShowMoreBtn} from "../showMoreBtn";
import {INIT_FILMS_COUNTER} from "../../consts";
import {Film} from "../../redux/features/asyncActions";

type PropsType = {
  films: Film[]
}

export const CatalogMoviesList = ({films}: PropsType) => {

  if (films) {
    const [counter, setCounter] = useState(INIT_FILMS_COUNTER);
    const renderFilms = films.slice(0, counter);


    const moreFilms = () => {
      setCounter(prevState => prevState + 8)
    }

    return (
      <div>
        <div className="catalog__movies-list">
          {renderFilms.map((obj) => (
            <MovieCard key={obj.id}
                       name={obj.name}
                       prevVideo={obj.preview_video_link}
                       id={obj.id}
                       prevImage={obj.preview_image}/>
          ))}

        </div>
        {
          renderFilms.length === films.length ? <div></div> :
            <div onClick={() => moreFilms()}>
              <ShowMoreBtn/>
            </div>
        }


      </div>

    );
  }

};
