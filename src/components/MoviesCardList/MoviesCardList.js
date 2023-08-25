import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, onAddMovie, onDeleteMovie, isSubmitted }) {

  const [displayedCardsDesktop, setDisplayedCardsDesktop] = useState(0);
  const [displayedCardsMobile, setDisplayedCardsMobile] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const isMoviesRoute = location.pathname === '/movies';
 
function setMovies () {
    const savedMovies = {
      displayedCardsDesktop,
      displayedCardsMobile,
    };
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
}


  useEffect(() => {
    setMovies()
    const handleResize = () => {
      setTimeout(() => {
        const windowWidth = window.innerWidth;
        let cardsPerRowDesktop = 0;
        let cardsPerRowMobile = 0;

        if (windowWidth >= 768) {
          cardsPerRowDesktop = 3;
          cardsPerRowMobile = 1
      }
      else if (windowWidth >= 480 && windowWidth < 768) {
          cardsPerRowDesktop = 2;
          cardsPerRowMobile = 1;
      }
      else if (windowWidth >= 320 && windowWidth < 480) {
          cardsPerRowDesktop = 1;
          cardsPerRowMobile = 1;
      }
        const maxDisplayedCardsDesktop = cardsPerRowDesktop * 4;
        const maxDisplayedCardsMobile = cardsPerRowMobile * 5;
        setDisplayedCardsDesktop(Math.min(maxDisplayedCardsDesktop, movies.length));
        setDisplayedCardsMobile(Math.min(maxDisplayedCardsMobile, movies.length));
        setShowButton(movies.length > Math.max(maxDisplayedCardsDesktop, maxDisplayedCardsMobile));
      }, 300);
    };

    handleResize();

    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMovies) {
      setDisplayedCardsDesktop(savedMovies.displayedCardsDesktop);
      setDisplayedCardsMobile(savedMovies.displayedCardsMobile);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps

    
  }, [movies]);


  useEffect(() => { 
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
if (savedMovies) {
  setDisplayedCardsDesktop(savedMovies.displayedCardsDesktop);
  setDisplayedCardsMobile(savedMovies.displayedCardsMobile);
}
  }, [movies]);

  const LoadMoreMovies = () => {
    const windowWidth = window.innerWidth;
    let loadCounter = 0;
    if (windowWidth >= 768) {
        loadCounter = 3;
    } else if (windowWidth >= 280 && windowWidth < 768) {
        loadCounter = 2;
    }

    setDisplayedCardsDesktop(displayedCardsDesktop + loadCounter);
    setDisplayedCardsMobile(displayedCardsMobile + loadCounter);
  };



  return (
    <section className="movies__list">
      <div className="movies__container">
      {movies.length > 0 ? (
          isMoviesRoute ? (
            isSubmitted &&
            movies
              .slice(0, displayedCardsDesktop >= displayedCardsMobile ? displayedCardsDesktop : displayedCardsMobile)
              .map((movie) => (
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
          isSubmitted && movies.length === 0 ? (  
            <p className="movies__not-found">Ничего не найдено</p>
          ) : [] 
        )}
      </div>
      {showButton && displayedCardsDesktop + displayedCardsMobile < movies.length && (
        <button className="movies__more-button" onClick={LoadMoreMovies}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;