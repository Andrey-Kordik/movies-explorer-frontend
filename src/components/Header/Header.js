import logo from '../../images/logo.png'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


function Header({ isLoggedIn }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsSidebarOpen(false);
      setIsClosing(false);
    }, 800);
  };
  



  return (
    <header className="header">
      <Link to="/" ><img className="logo" src={logo} alt="логотип"></img> </Link>

      {!isLoggedIn &&
        (
          <nav className='header__container'>
            <NavLink to="/signup"><button className='header__signup-button'>Регистрация</button></NavLink>
            <NavLink to="/signin"><button className='header__signin-button'>Войти</button></NavLink>
          </nav>

        )
      }

      {isLoggedIn &&
        (
          <div className='header__movie-container'>
            <nav className='header__movie-navigation'>
              <Link to="/movies" className="header__movies-link">Фильмы</Link>
              <Link to="/saved-movies" className="header__savedmovies-link">Сохраненный фильмы</Link>
            </nav>
            <NavLink to="/profile" className='header__account-button'>Аккаунт</NavLink>
            <button className="header__burger-menu" onClick={handleSidebarToggle}></button>
          </div>
        )
      }

      {isSidebarOpen && <Sidebar
        isSidebarOpen={isSidebarOpen}
        isClosing = {isClosing}
        onCloseSidebar={closeSidebar}
      />}
    </header>
  );
}

export default Header