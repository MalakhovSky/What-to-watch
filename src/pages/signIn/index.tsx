import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Logo} from "../../components/logo";
import {postUser} from "../../redux/features/asyncActions";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {PageFooter} from "../../components/pageFooter";

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  const submitSingIn = () => {
    dispatch(postUser({"email": `${email}`, "password": `${password}`}))
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                     id="user-email" onChange={emailChange} value={email}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                     id="user-password" onChange={passwordChange} value={password}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <Link to='/'>
              <div className="sign-in__btn" onClick={submitSingIn}>Sign in</div>
            </Link>

          </div>
        </form>
      </div>
      <PageFooter/>
    </div>
  );
};



