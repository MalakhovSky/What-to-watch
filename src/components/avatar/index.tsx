import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppDispatch";


export const Avatar: React.FC = () => {


  const user = useAppSelector(state => state.users.user)


    return (
      <div className="user-block">
        {
          user?
            <div data-cy="avatar" className="user-block__avatar">
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


