import React, {useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {fetchFilms} from "../../redux/features/asyncActions";
import {useParams} from "react-router-dom";

export const Player = () => {
  const [isPlay, setIsPlay] = useState(false);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch]);

  const {id} = useParams()
  const filmsData = useAppSelector(state=>state.films.films)

  const film = filmsData.find((item)=>item.id === Number(id))
  console.log(film,'film')

  const playerRef = useRef(null);
  const toggleVideo = () => {

    if(isPlay){
      playerRef.current.pause()
    }else{
      playerRef.current.play()
    }
    setIsPlay(!isPlay)
  }

  if(film){
  return (

    <div className="player">
      <video className="player__video" poster={film.poster_image} ref={playerRef} >
        <source src={film.video_link}

                type="video/mp4"/>
      </video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left:" 30%"}}>Toggler</div>
          </div>
          <div className="player__time-value">{film.run_time}Фораматировать</div>
        </div>

        <div className="player__controls-row">
          <button onClick={()=>toggleVideo()}
                  type="button" className="player__play" >
            {
              !isPlay ? <svg viewBox="0 0 19 19" width="19" height="19">
                <use href="#play-s"></use>
              </svg>:<span>PAUSE</span>
            }
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
  } else{
    return <div>LOADING</div>
  }
};
