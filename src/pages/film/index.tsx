import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {MovieCardBg} from "../../components/movieCardBg";
import {Logo} from "../../components/logo";
import {Avatar} from "../../components/avatar";
import MoviesLikeThis from "../../components/moviesLikeThis";
import {PageFooter} from "../../components/pageFooter";
import {Tabs} from "../../components/tabs";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {fetchFilms} from "../../redux/features/asyncActions";
import {MyListBtn} from "../../components/myListBtn";


export const Film: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch]);

  const {id} = useParams()
  const films = useAppSelector((state) => state.films.films)
  const user = useAppSelector(state => state.users.user)

  const film = films.find((item) => item.id === Number(id))


  if (film) {
    return (
      <div>
        <section style={{backgroundColor: film?.background_color}} className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <MovieCardBg backImg={`${film.background_image}`}/>
            <h1 className="visually-hidden"> WTW</h1>
            <header className="page-header movie-card__head">
              <Logo/>
              <Avatar/>
            </header>
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.released}</span>
                </p>
                <div className="movie-card__buttons">
                  <button data-cy="play" className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s"/>
                    </svg>
                    <Link to={`/player/${id}`} className="breadcrumbs__link"><span>Play</span></Link>
                  </button>
                  <MyListBtn film={film}/>
                  {
                    user ?
                      <Link data-cy="review" to={`/films/review/${id}`} className="btn movie-card__button">Add review</Link>
                      :
                      <Link data-cy="review" to='/login' className="btn movie-card__button">Add review</Link>
                  }

                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={`${film.poster_image}`} alt={`${film.name}`} width="218"
                     height="327"/>
              </div>
              <Tabs film={film}/>
            </div>
          </div>
        </section>


        <div className="page-content">
          <MoviesLikeThis films={films} genre={film.genre}/>
          <PageFooter/>
        </div>
      </div>
    );
  }
  return <div>LOADING</div>


};
