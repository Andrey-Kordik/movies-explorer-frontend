import './MovieCard.css';
import { useState } from 'react';
import savedIcon from '../../images/saved-icon.svg';
import deleteIcon from '../../images/delete-icon.svg';
import { useLocation } from 'react-router-dom';

function Movie({ image, name, duration }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveButtonClick = () => {
    setIsSaved(!isSaved);
  };

  const location = useLocation();

  const renderSaveButton = () => {
    if (location.pathname === '/movies') {
      if (isSaved) {
        return (
          <img
            className="movie__saved-icon"
            src={savedIcon}
            alt="сохранено"
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
        />
      );
    }
  };


  
  return (
    <article className="movie">
      <img className="movie__image" src={image} alt={name}></img>
      <div className="movie__info">
        <p className="movie__name">{name}</p>
        <div className="movie__duration">{duration}</div>
      </div>
      {renderSaveButton()}
    </article>
  );
}

export default Movie;