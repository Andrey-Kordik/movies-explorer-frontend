import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies({ currentMovies, 
    isLoading, 
    isLoggedIn, 
    isCheckboxChecked, 
    onCheckboxChange,
    onSearch,
    filteredMovies,
    isSubmitted,
    onAddMovie,
    onIsSubmitted,
    onDeleteMovie,
    setIsLoading,
    
    
}) {



    
    return (

        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main className="movies">
                <SearchForm
                    movies={currentMovies}
                    isCheckboxChecked={isCheckboxChecked}
                    onCheckboxChange={onCheckboxChange}
                    onSearch={onSearch}
                    onIsSubmitted={onIsSubmitted}
                    setIsLoading={setIsLoading}
                />
        {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={isSubmitted ? filteredMovies : []} 
        onAddMovie={onAddMovie}
        isSubmitted={isSubmitted}
        onDeleteMovie={onDeleteMovie}
        />
      )}
            </main>
            <Footer />
        </>
    );
}

export default Movies