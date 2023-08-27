import './MovieCard.css';
import { useContext } from 'react';
import savedIcon from '../../images/saved-icon.svg';
import deleteIcon from '../../images/delete-icon.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SavedMoviesContext } from '../contexts/SavedMoviesContext';

function Movie({ movie, onAddMovie, onDeleteMovie }) {

  const {savedMovies} = useContext(SavedMoviesContext)

  const isSaved = savedMovies.some((item) => {
    return movie.id === item.movieId
  });

  
  const location = useLocation();

  const handleSaveButtonClick = () => {
    onAddMovie(movie);

  };

  const handleDeleteButtonClick = () => { 
    if (location.pathname === '/movies') {    
      onDeleteMovie(movie.id);
    } else if (location.pathname === '/saved-movies') {    
      onDeleteMovie(movie._id);
    }};

  const renderSaveButton = () => {
    if (location.pathname === '/movies') {
      if (isSaved) {
        return (
          <img
            className="movie__saved-icon"
            src={savedIcon}
            alt="сохранено"
            onClick={handleDeleteButtonClick}
          />
        );
      } else {
        return (
          <button className="movie__savebutton" onClick={handleSaveButtonClick}>
            Сохранить
          </button>
        );
      }
    } else if (location.pathname === '/saved-movies') {
      return (
        <img
          className="movie__delete-icon"
          src={deleteIcon}
          alt="удалить"
          onClick={handleDeleteButtonClick}
        />
      );
    }
  };

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours === 0) {
      return `${minutes}мин`;
    } else if (minutes === 0) {
      return `${hours}ч`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  };

  const imageSrc = location.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image;

  return (
    <article className="movie">
      <Link to={movie.trailerLink} target="_blank">
        <img className="movie__image" src={imageSrc} alt={movie.nameRU} />
      </Link>

      <div className="movie__info">
        <p className="movie__name">{movie.nameRU}</p>
        <div className="movie__duration">{formatDuration(movie.duration)}</div>
      </div>
      {renderSaveButton()}
    </article>
  );
}

export default Movie;