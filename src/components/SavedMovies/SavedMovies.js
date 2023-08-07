import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';

function SavedMovies({ isLoggedIn }) {
  return (
    <main className="saved-movies">
      <Header
        isLoggedIn={isLoggedIn}
      />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

export default SavedMovies