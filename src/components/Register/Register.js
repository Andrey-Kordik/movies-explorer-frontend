import './Register.css';
import logo from '../../images/logo.svg'
import React, { useState } from 'react'
import { Link}  from 'react-router-dom';
import useFormWithValidation from '../../utils/FormValidation';

function Register ({onRegister}) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;

    onRegister(name, email, password);
  };

  
    return (
      <main>
      <section className="register">
      <Link to="/" className='logo__link'><img className="logo" src={logo} alt="логотип"></img> </Link>
      <h1 className='register__heading'>Добро пожаловать!</h1>
      <form className='register__form' onSubmit={handleRegisterSubmit}>
        <fieldset className="register__form-group">
          <label className="register__label" htmlFor="name">Имя</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={values.name || ''} required  minLength="2" maxLength="30" placeholder='Имя' className ="register__input"/>
          {errors.name && <span className="register__error">{errors.name}</span>}
        </fieldset>
        <fieldset className="register__form-group">
          <label className="register__label" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange}  value={values.email || ''} required placeholder='Email' className ="register__input"/>
          {errors.email && <span className="register__error">{errors.email}</span>}
        </fieldset>
        <fieldset className="register__form-group">
          <label className="register__label" htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" onChange={handleChange} value={values.password || ''} minLength="6" maxLength="15" required placeholder='Пароль'  className ="register__input"/>
          {errors.password && <span className="register__error">{errors.password}</span>}
        </fieldset>
        <button className="register__button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
      </form>
      <p className='register__text'>Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link></p>
      </section>
      </main>
    );
  }
  
  export default Register   