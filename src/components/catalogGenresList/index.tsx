import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {fetchFilms} from "../../redux/features/asyncActions";
import {filteredGenres, setCurrentGenre} from "../../redux/features/filmsSlice";
import {INIT_GENRES} from "../../consts";

export const CatalogGenresList = ({films}) => {
  const dispatch = useAppDispatch()


  const [genres, setGenres] = useState([]);
  const [isClicked, setIsClicked] = useState(null);

  useEffect(() => {
    const tempArray = new Set(films.map((film)=> film.genre))
     setGenres([...tempArray]);
    console.log(tempArray,'tempArray')
  }, [films]);

  console.log(genres,'GENRES')


  const allGenres = () =>{
    dispatch(setCurrentGenre(INIT_GENRES))
    setIsClicked(null)
  }

  const handleGenreChange = (e,item,index) =>{
    dispatch(setCurrentGenre(item))
    setIsClicked(index)
  }



  return (
     <div>
          <ul className="catalog__genres-list" >
          <li className={isClicked?"catalog__genres-item":"catalog__genres-item catalog__genres-item--active"}>
            <div onClick={()=>allGenres()} className="catalog__genres-link">All genres</div>
          </li>
          {
            genres.map((item,index)=>(
              <li key={item} className={isClicked === index?"catalog__genres-item catalog__genres-item--active":"catalog__genres-item"}>
                <div  onClick={(e)=>handleGenreChange(e,item,index)}
                     className="catalog__genres-link">
                  {item}
                </div>
              </li>
            ))
          }

        </ul>
        </div>


  );
};


