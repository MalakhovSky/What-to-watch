import React, {FC, useState} from 'react';
import {reviews} from "../../mocks/reviews"
import {films} from "../../mocks/films";
import {Review} from "../review";

type FilmType = {
  id: number,
  name: string,
  poster_image: string,
  preview_image: string,
  background_image: string,
  background_color: string,
  video_link: string,
  preview_video_link: string,
  description: string,
  rating: number,
  scores_count: number,
  director: string,
  starring: string[],
  run_time: number,
  genre: string,
  released: number,
  is_favorite: boolean
}

type TabsType={
  film: FilmType;
}

export const Tabs: FC<TabsType> = ({
  film
  }) => {
  const [toggleState, SetToggleState] = useState(1);

  const toggleTab = (index) =>{
    SetToggleState(index)
  }

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={toggleState === 1 ? "movie-nav__item movie-nav__item--active":"movie-nav__item"}>
            <div onClick={()=>toggleTab(1)}  className="movie-nav__link">Overview</div>
          </li>
          <li className={toggleState === 2 ? "movie-nav__item movie-nav__item--active":"movie-nav__item"}>
            <div onClick={()=>toggleTab(2)}  className="movie-nav__link">Details</div>
          </li>
          <li className={toggleState === 3 ? "movie-nav__item movie-nav__item--active":"movie-nav__item"}>
            <div onClick={()=>toggleTab(3)}  className="movie-nav__link">Reviews</div>
          </li>
        </ul>
      </nav>

      <div className={toggleState !== 1 ? "visually-hidden" :""} >
      <div className="movie-rating ">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          {/**todo Тут сделать оценку в зависимости от рейтинга **/}
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{film.scores_count} ratings</span>
        </p>
      </div>
        {/**todo Тут сделать описание film.description, а то мне лень **/}
      <div className="movie-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
          Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

        <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
          the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
          mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
          murder.</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.slice(0, 4).map((star) => (star))}
          and other</strong></p>
      </div>
      </div>


      <div className={toggleState !== 2 ? "visually-hidden" :""}>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.starring.map((star) => (<>{star}<br/></>))}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{film.run_time}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
      </div>

      <div className={toggleState !== 3 ? "visually-hidden" :""}>
          {
            reviews.map((item)=>(
             <Review key={item.id}
                     comment={item.comment}
                     userName={item.user.name}
                     date={item.date}
                     rating={item.rating}/>
            ))
          }
      </div>
    </div>

  );
};


