import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";


type PropsType = {
  name: string,
  prevImage: string,
  id: number,
  prevVideo: string,
}

export const MovieCard = ({name, prevImage, id, prevVideo}: PropsType) => {
  const playerRef = useRef(null);
  const playVideo = () => {
    playerRef.current.play()
    console.log('dadadawdada')
  }
  const pauseVideo =()=>{
    playerRef.current.load()
  }


  return (

    <div className="small-movie-card catalog__movies-card">
      <article style={{width: 280}}>
        <Link to={`/films/${id}`}>
          <div className="small-movie-card__image"
               onMouseOver={() => playVideo()}
               onMouseOut={()=>pauseVideo()}
          >
            <video
              style={{width: 300}}
              ref={playerRef}
              poster={`${prevImage}`}
              muted
            >
              <source src={prevVideo}
                      type="video/mp4"/>
            </video>

          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <div className="small-movie-card__link">{name}</div>
        </h3>
      </article>
    </div>

  );
};

