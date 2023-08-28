import './Login.css';
import '../../components/Register/Register.css'
import logo from '../../images/logo.svg'
import { Link}  from 'react-router-dom'
import React, { useState } from 'react'
import useFormWithValidation from '../../utils/FormValidation';

function Login ({ onLogin}) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();
 
  const handleLoginSubmit = (e) =>{
    e.preventDefault()
    const { email, password } = values;

    onLogin(email, password)

  }
    return (
      <main>
        <section className="login">
        <Link to="/" className='logo__link' ><img className="logo" src={logo} alt="логотип"></img> </Link>
        <h1 className='register__heading'>Рады видеть!</h1>
        <form className='register__form' onSubmit={handleLoginSubmit}>
          <fieldset className="register__form-group">
            <label className="register__label" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={values.email || ''} required placeholder='Email' className ="register__input"/>
            {errors.email && <span className="register__error">{errors.email}</span>}
          </fieldset>
          <fieldset className="register__form-group">
            <label className="register__label" htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" onChange={handleChange} value={values.password || ''} required  placeholder='Пароль' minLength="6" maxLength="12" className ="register__input"/>
            {errors.password && <span className="register__error">{errors.password}</span>}
          </fieldset>
          <button className='register__button' type="submit" disabled={!isValid}>Войти</button>
        </form>
        <p className='register__text'>Ещё не зарегистрированы? <Link className='register__link' to='/signup'>Регистрация</Link></p>
        </section>
        </main>
    );
  }
  
  export default Login