import React from 'react';

type PropsType={
  backImg:string;
  name?:string;
}

export const MovieCardBg = ({backImg,name}:PropsType) => {
  return (
      <div className="movie-card__bg">
        <img src={`${backImg}`} alt={name}/>
      </div>
  );
};


