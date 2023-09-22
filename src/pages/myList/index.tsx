import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from "../../components/logo";
import {Avatar} from "../../components/avatar";
import {Catalog} from "../../components/catalog";
import {PageFooter} from "../../components/pageFooter";

type PropsType = {

}

export const MyList = props => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar/>
      </header>

      <Catalog/>

      <PageFooter/>
    </div>
  );
};



