import React from 'react';
import {useAppSelector} from "../../redux/hooks/useAppDispatch";

export const Avatar = () => {

  const user = useAppSelector(state => state.users.user)
  console.log(user,'USER V AVATAR')


    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={`${user?.avatar_url}`} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    );


};


