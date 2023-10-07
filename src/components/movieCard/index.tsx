import React from 'react';
import {Link} from "react-router-dom";


 type PropsType = {
   name:string,
   posterImage:string,
   id: number
}

export const MovieCard = ({name,posterImage,id}:PropsType) => {
  return (

    <div className="small-movie-card catalog__movies-card">
      <article style = {{width:280}} >
        <Link  to={`/films/${id}`}>
        <div  className="small-movie-card__image">
          <img  src={`${posterImage}`}
               alt={`${name}`} />
        </div>
        </Link>
        <h3 className="small-movie-card__title">
          <div className="small-movie-card__link" >{name}</div>
        </h3>
      </article>
    </div>

  );
};

