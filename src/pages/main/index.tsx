import React, {useEffect} from 'react';
import {PageFooter} from "../../components/pageFooter";
import {MovieHeader} from "../../components/movieHeader";
import {Catalog} from "../../components/catalog";
import {fetchFilms} from "../../redux/features/asyncActions";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";


export const Main: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch]);

  const films = useAppSelector(state => state.films.films)

  return (
    <div>
      <MovieHeader/>
      <div className="page-content">
        <Catalog films={films}/>
        <PageFooter/>
      </div>
    </div>
  );
};

