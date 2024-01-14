import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {MovieCardBg} from "../movieCardBg";
import {Logo} from "../logo";
import {Avatar} from "../avatar";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {fetchPromo} from "../../redux/features/asyncActions";
import {MyListBtn} from "../myListBtn";

export const MovieHeader:React.FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPromo())
  }, [dispatch]);


  const promo = useAppSelector(state => state.promo.promo)

  return (
    <section className="movie-card">
      <MovieCardBg backImg={promo?.background_image}/>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo/>
          <Avatar/>

      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={`${promo?.poster_image}`} alt="Promo poster" width="218"
                 height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promo?.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promo?.genre}</span>
              <span className="movie-card__year">{promo?.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use href="#play-s"/>
                </svg>
                <Link to={`/player/${promo?.id}`} className="breadcrumbs__link"><span>Play</span></Link>
              </button>
              <MyListBtn film={promo}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


