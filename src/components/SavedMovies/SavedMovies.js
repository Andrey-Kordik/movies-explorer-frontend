import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn, 
  savedMovies, 
  isLoading, 
  isCheckboxChecked,
  onCheckboxChange, 
  onSubmit, 
  filteredMovies, 
  onDeleteMovie, 
  onIsSubmitted, 
  setIsLoading,
  onChange,
  searchTerm,
  isSubmitted,
  isMoviesRoute
 }) {

  console.log(filteredMovies)
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main className="saved-movies">
        <SearchForm
          movies={savedMovies}
          isCheckboxChecked={isCheckboxChecked}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          onIsSubmitted={onIsSubmitted}
          setIsLoading={setIsLoading}
          onChange = {onChange}
          searchTerm = {searchTerm}

        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
          movies={filteredMovies}
            onDeleteMovie={onDeleteMovie}
            isMoviesRoute = {isMoviesRoute}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies