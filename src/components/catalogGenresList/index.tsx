import React, {useEffect, useMemo, useState} from 'react';
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {fetchFilms} from "../../redux/features/asyncActions";
import {filteredGenres, setCurrentGenre} from "../../redux/features/filmsSlice";

export const CatalogGenresList = ({films}) => {
  const dispatch = useAppDispatch()

  const [genres, setGenres] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const tempArray = new Set(films.map((film)=> film.genre))
     setGenres([...tempArray]);
    console.log(tempArray,'tempArray')
  }, [films]);

  console.log(genres,'GENRES')


  const allGenres = () =>{
    dispatch(setCurrentGenre('All Genres'))
  }

  const handleGenreChange = (item) =>{
    dispatch(setCurrentGenre(item))
  }


  return (
     <div>
          <ul className="catalog__genres-list" >
          <li className="catalog__genres-item catalog__genres-item--active">
            <div onClick={()=>allGenres()} className="catalog__genres-link">All genres</div>
          </li>
          {
            genres.map((item)=>(
              <li key={item} className="catalog__genres-item">
                <div onClick={(e)=>handleGenreChange(item)} className="catalog__genres-link">{item}</div>
              </li>
            ))
          }

        </ul>
        </div>


  );
};


