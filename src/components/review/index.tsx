import React from 'react';

type PropsType = {
  comment:string;
  userName:string;
  date:string;
  rating:number;
}


export const Review = ({comment,userName,date,rating}:PropsType) => {

  const commentDate = (new Date(date)).toDateString()

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{userName}</cite>
            <time className="review__date" dateTime="2016-12-24">{commentDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
      </div>
    </div>
  );
};


