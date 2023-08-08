import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';

function Movies({ isLoggedIn,isCheckboxChecked, onCheckboxChange }) {
 
    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main className="movies">
                <SearchForm
                    isCheckboxChecked={isCheckboxChecked}
                    onCheckboxChange={onCheckboxChange}
                />
                <MoviesCardList
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies