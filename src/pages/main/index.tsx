import React, {useEffect, useState} from 'react';
import {PageFooter} from "../../components/pageFooter";
import {MovieHeader} from "../../components/movieHeader";
import {Catalog} from "../../components/catalog";
import {fetchFilms, getUser, postUsers} from "../../redux/features/asyncActions";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useAppDispatch";


export const Main = props => {
  const dispatch = useAppDispatch()
  const [sortedGenres, setSortedGenres] = useState([]);

  useEffect(() => {
   dispatch(fetchFilms())
  },[dispatch] );


  const films = useAppSelector(state => state.films.films)
  const user = useAppSelector(state => state.users.user)
  console.log(user,'ЮЗЭР_____________________')

  return (
    <div>
      <MovieHeader/>
      <div className="page-content">
        <Catalog/>
        <PageFooter/>
      </div>
    </div>
  );
};

