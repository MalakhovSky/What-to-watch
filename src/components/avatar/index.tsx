import React from 'react';
import {Link} from "react-router-dom";


export const Avatar = () => {

  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {}
  console.log(user,'АВАТАРКА')





    return (
      <div className="user-block">
        {
          localStorage.getItem('user') !== null || undefined ? <div className="user-block__avatar">
            <Link to={'/myList'}> <img src={`${user?.avatar_url}`} alt="User avatar" width="63" height="63"/></Link>

          </div>
            :
            <Link  to='login'>
              <div className="sign-in__btn">Sign in</div>
            </Link>
        }

      </div>
    );


};


