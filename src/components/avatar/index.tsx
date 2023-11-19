import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppDispatch";


export const Avatar: React.FC = () => {

  const [user, setUser] = useState(null);


  useEffect(() => {
    setUser(localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : {})
  }, []);

  const name = useAppSelector(state => state.users.user)
  console.log(name,'NAME')
    return (
      <div className="user-block">
        {
          localStorage.getItem('user') != null
            ?
            <div className="user-block__avatar">
              <Link to='/myList'> <img src={`${user?.avatar_url}`} alt="User avatar" width="63" height="63"/></Link>
            </div>
            :
            <Link to='/login'>
              <div className="sign-in__btn">Sign in</div>
            </Link>
        }
      </div>
    )

;


};


