import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../redux/hooks/useAppDispatch";

export const Avatar = () => {
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {}


    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={`${user?.avatar_url}`} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    );


};


