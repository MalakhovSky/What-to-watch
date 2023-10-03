import React from 'react';

export const MovieCard = ({name,posterImage}) => {
  return (
    <div className="small-movie-card catalog__movies-card">
      <article style = {{width:280}} >
        <div  className="small-movie-card__image">
          <img  src={`${posterImage}`}
               alt="Fantastic Beasts: The Crimes of Grindelwald" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    </div>
  );
};

