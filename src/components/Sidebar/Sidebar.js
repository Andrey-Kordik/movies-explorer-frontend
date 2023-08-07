import './Sidebar.css';
import { Link } from 'react-router-dom';


function Sidebar ({isSidebarOpen, onCloseSidebar, isClosing}) {

    const handleSidebarClose = () => {
        onCloseSidebar();
      };

    return (
        <div className={`sidebar__overlay ${isSidebarOpen ? "sidebar__overlay_opened" : ""}`}>
        <div className={`sidebar ${isSidebarOpen ? 'sidebar_opened' : ''} ${isClosing ? 'sidebar_closing' : ''}`}>
        <div className='sidebar__close-icon' onClick={handleSidebarClose}></div>
        <div className='sidebar__navigation'>
            <Link className='sidebar__link' to="/">Главная</Link>
            <Link className='sidebar__link' to="/movies">Фильмы</Link>
            <Link className='sidebar__link' to="/saved-movies">Сохраненные Фильмы</Link>
        </div>
        <Link to="/profile" className='sidebar__account-button'>Аккаунт</Link>
        </div>
      </div>
    );
  }
  
  export default Sidebar