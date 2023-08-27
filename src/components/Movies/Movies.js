import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies({
    isLoading,
    isLoggedIn,
    isCheckboxChecked,
    onCheckboxChange,
    onSubmit,
    filteredMovies,
    isSubmitted,
    onAddMovie,
    onIsSubmitted,
    onDeleteMovie,
    setIsLoading,
    onChange,
    searchTerm,
    isMoviesRoute,
}) {

    return (

        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main className="movies">
                <SearchForm
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
                    <MoviesCardList movies={isSubmitted ? filteredMovies : []}
                        onAddMovie={onAddMovie}
                        isSubmitted={isSubmitted}
                        onDeleteMovie={onDeleteMovie}
                        isMoviesRoute = {isMoviesRoute}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}

export default Movies