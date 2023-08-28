import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import { useState, useEffect } from 'react';

function MoviesCardList({ movies,  
  onAddMovie,  
  onDeleteMovie,  
  isSubmitted,  
  isMoviesRoute }) {  
  
  const [showButton, setShowButton] = useState(false);  
  const [initialCards, setInitialCards] = useState(0);  
  const movieCards = movies.slice(0, initialCards);  
  
  function showInitialMovies() {  
    if (window.innerWidth < 350) {  
      setInitialCards(5);  
    } else if (window.innerWidth >= 350 && window.innerWidth <= 768) {  
      setInitialCards(8);  
    } else if (window.innerWidth > 768) {  
      setInitialCards(12);  
    }  
    setShowButton(movies.length > initialCards);  
  }  
  
  useEffect(() => {
    setTimeout(() => {
    showInitialMovies();
  }, 300);
    window.addEventListener('resize', showInitialMovies);
    return () => {
      window.removeEventListener('resize', showInitialMovies);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);
  
  function loadMoreMovies() {  
    if (window.innerWidth < 350) {  
      setInitialCards(initialCards + 2);  
    } else if (window.innerWidth >= 350 && window.innerWidth <= 1156) {  
      setInitialCards(initialCards + 2);  
    } else if (window.innerWidth > 1156) {  
      setInitialCards(initialCards + 3);  
    }  
  }  
  
  function hideButton() {  
    return movieCards.length === movies.length;  
  }  
  
  return (  
    <section className="movies__list">  
      <div className="movies__container">  
        {movies.length > 0 ? (  
          isMoviesRoute ? (  
            isSubmitted &&  
            movieCards.map((movie) => (  
              <MovieCard  
                key={movie.nameRU}  
                movie={movie}  
                onAddMovie={onAddMovie}  
                onDeleteMovie={onDeleteMovie}  
              />  
            ))  
          ) : (  
            movies.map((movie) => (  
              <MovieCard  
                key={movie.nameRU}  
                movie={movie}  
                onAddMovie={onAddMovie}  
                onDeleteMovie={onDeleteMovie}  
              />  
            ))  
          )  
        ) : (  
          (isSubmitted && movies.length === 0) || (!isMoviesRoute && movies.length === 0) ? (  
            <p className="movies__not-found">Ничего не найдено</p>  
          ) : null  
        )}  
      </div>  
      {showButton && !hideButton() && (  
        <button className="movies__more-button" onClick={loadMoreMovies}>  
          Ещё  
        </button>  
      )}  
    </section>  
  );  
}  
  
export default MoviesCardList;
