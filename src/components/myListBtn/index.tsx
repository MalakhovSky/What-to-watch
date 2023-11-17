import React from 'react';
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {addMyFilm} from "../../redux/features/filmsSlice";

export const MyListBtn = ({film}) => {

  const dispatch = useAppDispatch()

  return (
      <button onClick = {()=>dispatch(addMyFilm(film))} className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use href="#add"></use>
        </svg>
        <span>My list</span>
      </button>
  );
};


