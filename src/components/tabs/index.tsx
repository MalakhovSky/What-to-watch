import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Review} from "../review";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {fetchCommentsGet, Film} from "../../redux/features/asyncActions";


type TabsType = {
  film: Film;
}

export const Tabs: FC<TabsType> = ({film}) => {
  const dispatch = useAppDispatch()
  const commentsData = useAppSelector(state => state.comments.comments)

  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchCommentsGet(id))
  }, [dispatch, id]);

  const [toggleState, SetToggleState] = useState(1);

  const toggleTab = (index) => {
    SetToggleState(index)
  }

  const filmRating = (rating) => {
    let answer = 'Bad'
    if (rating >= 2) answer = 'Normal'
    if (rating >= 4) answer = 'Good'
    if (rating >= 6) answer = 'Very good'
    if (rating >= 8) answer = 'Awesome'
    return answer;

  }


  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={toggleState === 1 ? "movie-nav__item movie-nav__item--active" : "movie-nav__item"}>
            <div onClick={() => toggleTab(1)} className="movie-nav__link">Overview</div>
          </li>
          <li className={toggleState === 2 ? "movie-nav__item movie-nav__item--active" : "movie-nav__item"}>
            <div onClick={() => toggleTab(2)} className="movie-nav__link">Details</div>
          </li>
          <li className={toggleState === 3 ? "movie-nav__item movie-nav__item--active" : "movie-nav__item"}>
            <div onClick={() => toggleTab(3)} className="movie-nav__link">Reviews</div>
          </li>
        </ul>
      </nav>

      <div className={toggleState !== 1 ? "visually-hidden" : ""}>
        <div className="movie-rating ">
          <div className="movie-rating__score">{film.rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{filmRating(film.rating)}</span>
            <span className="movie-rating__count">{film.scores_count} ratings</span>
          </p>
        </div>
        <div className="movie-card__text">
          <p>{film.description}</p>
          <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {film.starring.slice(0, 4).map((star) => (`${star}, `))}
            and other </strong></p>
        </div>
      </div>


      <div className={toggleState !== 2 ? "visually-hidden" : ""}>
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

      <div className={toggleState !== 3 ? "visually-hidden" : ""}>
        {
          commentsData.map((item) => (
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


