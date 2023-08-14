import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';

function SavedMovies({ isLoggedIn, onCheckboxChange, isCheckboxChecked }) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main className="saved-movies">
        <SearchForm 
           isCheckboxChecked={isCheckboxChecked}
           onCheckboxChange={onCheckboxChange}/>
        <SavedMoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies