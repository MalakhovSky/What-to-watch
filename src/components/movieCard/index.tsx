import React, {useRef} from 'react';
import {Link} from "react-router-dom";


type PropsType = {
  name: string,
  prevImage: string,
  id: number,
  prevVideo: string,
}

export const MovieCard:React.FC = ({name, prevImage, id, prevVideo}: PropsType) => {
  const playerRef = useRef(null);


  const playVideo = () => {
    if(playerRef.current.readyState === 4 )  playerRef.current.play()
  }

  const pauseVideo =()=>{
    playerRef.current.load()
  }

  return (

    <div data-cy="card"  className="small-movie-card catalog__movies-card">
      <article style={{width: 280}}>
        <Link to={`/films/${id}`}>
          <div  className="small-movie-card__image"
               onMouseEnter={() => playVideo()} onFocus={() => playVideo()}
               onMouseOut={()=>pauseVideo()} onBlur={()=>playVideo()}
          >
            <video
              loop
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

