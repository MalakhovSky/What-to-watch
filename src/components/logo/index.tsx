import React from 'react';
import {Link} from "react-router-dom";
import {Paths} from "../../router/paths";

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to={Paths.main} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};


