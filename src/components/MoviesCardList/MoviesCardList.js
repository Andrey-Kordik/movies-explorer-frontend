
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';

function MoviesCardList({ movies, 
  onAddMovie, 
  onDeleteMovie, 
  isSubmitted, 
  loadMoreMovies, 
  showButton, 
  displayedCardsDesktop,
  displayedCardsMobile, 
  isMoviesRoute }) {

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
        <button className="movies__more-button" onClick={loadMoreMovies}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;