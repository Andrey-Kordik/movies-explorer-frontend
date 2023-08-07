import SearchForm from '../SearchForm/SearchForm';
import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';

function Movies({ isLoggedIn }) {

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    return (
        <main className="movies">
            <Header
                isLoggedIn={isLoggedIn}
            />
            <SearchForm
                isCheckboxChecked={isCheckboxChecked}
                onCheckboxChange={handleCheckboxChange}
            />
            <MoviesCardList
            />
              <Footer />
        </main>
    );
}

export default Movies