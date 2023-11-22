import React, {useEffect,useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {MovieCardBg} from "../../components/movieCardBg";
import {Logo} from "../../components/logo";
import {Avatar} from "../../components/avatar";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";
import {fetchCommentsPost, fetchFilms} from "../../redux/features/asyncActions";
import {ErrorPage} from "../../components/errorPage";


export const AddReview:React.FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch]);

  const filmsData = useAppSelector(state=>state.films.films)
  const {id}:number = useParams()
  const film = filmsData?.find((item)=>item.id === Number(id))

  const [starValue, setStarValue] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const setRating = (e) =>{
    setStarValue(e.target.value)
  }

  const CommentChange = (e) =>{
    setComment(e.target.value)
  }

  const handeAddReview = async (id,starValue,comment)=>{
    fetchCommentsPost({id,starValue,comment})
    await window.history.go(-1)

  }

  if(film){
    return (
      <div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <MovieCardBg name={film.name} backImg={`${film.background_image}`}/>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header">
              <Logo/>
              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <div className="breadcrumbs__link">Add review</div>
                  </li>
                </ul>
              </nav>
              <Avatar/>
            </header>
            <div className="movie-card__poster movie-card__poster--small">
              <img src={`${film.poster_image}`} alt={film.name} width="218"
                   height="327"/>
            </div>
          </div>
          <div className="add-review">
            <form  action="#" className="add-review__form">
              <div  className="rating">
                <div  onChange={(e)=>setRating(e)} className="rating__stars" >

                  <label className="rating__label" htmlFor="star-1">Rating 1</label>
                  <input  className="rating__input" id="star-1" type="radio" name="rating" value="1"/>


                  <input  className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input   className="rating__input" id="star-3" type="radio" name="rating" value="3" />
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input  className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input  className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>

                  <input  className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
                  <label className="rating__label" htmlFor="star-6">Rating 6</label>

                  <input  className="rating__input" id="star-7" type="radio" name="rating" value="7"/>
                  <label className="rating__label" htmlFor="star-7">Rating 7</label>

                  <input  className="rating__input" id="star-8" type="radio" name="rating" value="8" />
                  <label className="rating__label" htmlFor="star-8">Rating 8</label>

                  <input  className="rating__input" id="star-9" type="radio" name="rating" value="9"/>
                  <label className="rating__label" htmlFor="star-9">Rating 9</label>

                  <input  className="rating__input" id="star-10" type="radio" name="rating" value="10"/>
                  <label className="rating__label" htmlFor="star-10">Rating 10</label>
                </div>
              </div>

              <div className="add-review__text">
              <textarea onChange={CommentChange}   className="add-review__textarea" name="review-text" id="review-text"
                        placeholder="Review text"/>

                {
                  starValue && comment?
                    <div className="add-review__submit">
                      <div onClick={()=>handeAddReview(id,starValue,comment)} className="add-review__btn">Post</div>
                    </div> :
                    <div className="add-review__submit">
                      <div   className="add-review__btn">Post</div>
                    </div>
                }
              </div>
            </form>
          </div>
        </section>
      </div>
    )}
    return(<ErrorPage/>)



};

