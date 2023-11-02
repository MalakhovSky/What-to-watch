import React, {useEffect} from 'react';

export const CatalogGenresList = ({films}) => {
  console.log(films,'filmы')

  if(films){
    console.log('govnpo')
  }






  return (
    <div>
      <ul className="catalog__genres-list">


            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="/src/pages#" className="catalog__genres-link">All genres</a>
            </li>




      </ul>
    </div>
  );
};


