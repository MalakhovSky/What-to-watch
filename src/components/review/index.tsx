import React from 'react';

type PropsType = {
  comment:string;
  userName:string;
  date:string;
  rating:number;
}

export const Review = ({comment,userName,date,rating}:PropsType) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{userName}</cite>
            <time className="review__date" dateTime={new Date(date).toLocaleString()}>{new Date(date).toLocaleString()}-Фораматировать</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
      </div>
    </div>
  );
};


