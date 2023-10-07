import React, {useState} from 'react';
import {reviews} from "../../mocks/reviews"
import {films} from "../../mocks/films";
import {Review} from "../review";

type PropsType={
  id:number;
}

export const Tabs = ({id}:PropsType) => {
  const [toggleState, SetToggleState] = useState(1);

  const toggleTab = (index) =>{
    SetToggleState(index)
  }


  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={toggleState === 1 ? "movie-nav__item movie-nav__item--active":"movie-nav__item"}>
            <div onClick={()=>toggleTab(1)}  className="movie-nav__link">Overview</div>
          </li>
          <li className={toggleState === 2 ? "movie-nav__item movie-nav__item--active":"movie-nav__item"}>
            <div onClick={()=>toggleTab(2)}  className="movie-nav__link">Details</div>
          </li>
          <li className={toggleState === 3 ? "movie-nav__item movie-nav__item--active":"movie-nav__item"}>
            <div onClick={()=>toggleTab(3)}  className="movie-nav__link">Reviews</div>
          </li>
        </ul>
      </nav>

      <div className={toggleState !== 1 ? "visually-hidden" :""} >
      <div className="movie-rating ">
        <div className="movie-rating__score">8,9</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
          Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

        <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
          the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
          mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
          murder.</p>

        <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

        <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
          and other</strong></p>
      </div>
      </div>


      <div className={toggleState !== 2 ? "visually-hidden" :""}>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">Wes Andreson</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
                    Bill Murray, <br/>
                    Edward Norton, <br/>
                    Jude Law, <br/>
                    Willem Dafoe, <br/>
                    Saoirse Ronan, <br/>
                    Tony Revoloru, <br/>
                    Tilda Swinton, <br/>
                    Tom Wilkinson, <br/>
                    Owen Wilkinson, <br/>
                    Adrien Brody, <br/>
                    Ralph Fiennes, <br/>
                    Jeff Goldblum
                  </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">1h 39m</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">Comedy</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">2014</span>
          </p>
        </div>
      </div>
      </div>

      <div className={toggleState !== 3 ? "visually-hidden" :""}>
          {
            reviews.map((item)=>(
             <Review key={item.id}
                     comment={item.comment}
                     userName={item.user.name}
                     date={item.date}
                     rating={item.rating}/>
            ))
          }
      </div>
    </div>

  );
};


