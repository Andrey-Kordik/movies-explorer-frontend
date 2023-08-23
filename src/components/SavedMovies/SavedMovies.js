import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn, savedMovies, isLoading, isCheckboxChecked, onCheckboxChange, onSearch, filteredMovies, onDeleteMovie, onIsSubmitted, setIsLoading}) 
{

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
          onSearch={onSearch}
          onIsSubmitted={onIsSubmitted}
          setIsLoading={setIsLoading}

        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={filteredMovies}
            onDeleteMovie={onDeleteMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies