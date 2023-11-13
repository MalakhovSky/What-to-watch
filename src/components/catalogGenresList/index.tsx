import React, {useEffect} from 'react';

export const CatalogGenresList = ({films}) => {
  console.log(films,'filmы')

  useEffect(() => {
  }, []);

  if(films){
    films = films.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.genre === value.genre
        ))
    )
  }

  return (
    <div>
      <ul className="catalog__genres-list">

            <li className="catalog__genres-item catalog__genres-item--active">
              <div className="catalog__genres-link">All genres</div>
            </li>
        {
          films?.map((item)=>(
            <li className="catalog__genres-item">
              <div className="catalog__genres-link">{item.genre}</div>
            </li>
          ))
        }

      </ul>
    </div>
  );
};


