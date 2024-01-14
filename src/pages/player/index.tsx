import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {fetchFilms} from "../../redux/features/asyncActions";

export const Player:React.FC = () => {
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

  const toggleScreen = () =>{
    playerRef.current.webkitEnterFullscreen()
  }

  const filmTimeHours = Math.floor(film?.run_time/60)

  if(film){
  return (

    <div className="player">
      <video className="player__video" poster={film.background_image} ref={playerRef}>
        <track kind="captions" />
        <source src={film.video_link}

                type="video/mp4"/>
      </video>

      <button data-cy="exit" onClick={()=>window.history.go(-1)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            lowScreen
          </div>
          <div className="player__time-value">{`${filmTimeHours}:${(film.run_time)-60*filmTimeHours}`}</div>
        </div>

        <div className="player__controls-row">
          <button data-cy="play" onClick={()=>toggleVideo()}
                  type="button" className="player__play" >
            {
              !isPlay ? <svg viewBox="0 0 19 19" width="19" height="19">
                <use href="#play-s"/>
              </svg>:
                <svg width="14px" height="21px" viewBox="0 0 14 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
              </g></svg>
            }
            <span>Play</span>
          </button>
          <div className="player__name">Trans potting</div>
          <button data-cy="fullScreen" onClick={()=>toggleScreen()} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
  }
    return <div>LOADING</div>

};
