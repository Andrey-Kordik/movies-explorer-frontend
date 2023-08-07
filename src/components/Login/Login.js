import './Login.css';
import '../../components/Register/Register.css'
import logo from '../../images/logo.png'
import { Link}  from 'react-router-dom';

function Login ({ onLogin}) {
    return (
        <section className="login">
        <Link to="/" className='logo__link' ><img className="logo" src={logo} alt="логотип"></img> </Link>
        <h1 className='register__heading'>Рады видеть!</h1>
        <form className='register__form'>
          <fieldset className="register__form-group">
            <label className="register__label" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required  className ="register__input"/>
          </fieldset>
          <fieldset className="register__form-group">
            <label className="register__label" htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" required  className ="register__input"/>
          </fieldset>
          <Link to="/movies"><button className='register__button' onClick={onLogin}>Войти</button></Link>
        </form>
        <p className='register__text'>Ещё не зарегистрированы? <Link className='register__link' to='/signup'>Регистрация</Link></p>
        </section>
    );
  }
  
  export default Login