import './Register.css';
import logo from '../../images/logo.svg'
import { Link}  from 'react-router-dom';

function Register () {
    return (
      <main>
      <section className="register">
      <Link to="/" className='logo__link'><img className="logo" src={logo} alt="логотип"></img> </Link>
      <h1 className='register__heading'>Добро пожаловать!</h1>
      <form className='register__form'>
        <fieldset className="register__form-group">
          <label className="register__label" htmlFor="name">Имя</label>
          <input type="text" id="name" name="name" required  minLength="2" maxLength="12" placeholder='Имя' className ="register__input"/>
        </fieldset>
        <fieldset className="register__form-group">
          <label className="register__label" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder='Email' className ="register__input"/>
        </fieldset>
        <fieldset className="register__form-group">
          <label className="register__label" htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" minLength="8" maxLength="15" required placeholder='Пароль'  className ="register__input"/>
        </fieldset>
        <Link to="/signin"><button className='register__button' type='submit'>Зарегистрироваться</button></Link>
      </form>
      <p className='register__text'>Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link></p>
      </section>
      </main>
    );
  }
  
  export default Register