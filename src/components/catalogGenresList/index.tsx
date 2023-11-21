import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {Film} from "../../redux/features/asyncActions";
import {setCurrentGenre} from "../../redux/features/filmsSlice";
import {INIT_GENRES} from "../../consts";

type PropsType={
  films:Film[]
}

export const CatalogGenresList: React.FC = ({films}:PropsType) => {
  const dispatch = useAppDispatch()


  const [genres, setGenres] = useState([]);
  const [isClicked, setIsClicked] = useState(null);

  useEffect(() => {
    const tempArray = new Set(films.map((film)=> film.genre))
     setGenres([...tempArray]);

  }, [films]);


  const allGenres = () =>{
    dispatch(setCurrentGenre(INIT_GENRES))
    setIsClicked(null)
  }

  const handleGenreChange = (item,index) =>{
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
                <div data-cy="genre" onClick={()=>handleGenreChange(item,index)}
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


