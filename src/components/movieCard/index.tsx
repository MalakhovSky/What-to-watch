import React from 'react';

export const MovieCard = () => {
  return (
    <div>
      <article style = {{width:280}} className="small-movie-card catalog__movies-card">
        <div  className="small-movie-card__image">
          <img  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
               alt="Fantastic Beasts: The Crimes of Grindelwald" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of
            Grindelwald</a>
        </h3>
      </article>
    </div>
  );
};

