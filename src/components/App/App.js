import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import { moviesApi } from '../../utils/MoviesApi.js';
import { mainApi } from '../../utils/MainApi.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../contexts/SavedMoviesContext.js';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [currentMovies, setCurrentMovies] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCardsDesktop, setDisplayedCardsDesktop] = useState(0);
  const [displayedCardsMobile, setDisplayedCardsMobile] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [searchTermSavedMovies, setSearchTermSavedMovies] = useState('');
  const [isSavedMoviesCheckboxChecked, setIsSavedMoviesCheckboxChecked] = useState(false);

  const navigate = useNavigate()
  const location = useLocation();

  const isMoviesRoute = location.pathname === '/movies';

  function handleUpdateUser(data) {
    mainApi.editUserData(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  function handleLogin(email, password) {
    mainApi.authorize(email, password)
      .then(() => {
        setLoggedIn(true)
        navigate('/movies')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  function verifyToken() {
    mainApi.checkToken()
      .then((data) => {
        if (data) {
          setLoggedIn(true)
          navigate('/movies')
        }
        else {
          setLoggedIn(false)
        }
      })
      .catch(err => {
        setLoggedIn(false)
        console.log(err.message)
      })
  }

  function addMovie(movie) {
    mainApi.addMovies({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
      owner: currentUser._id,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function deleteMovie(id) {
    mainApi.deleteMovies(id)
      .then(() => {
        setFilteredMovies(filteredMovies =>
          filteredMovies.filter(movie => movie._id !== id)
        );
        setSavedMovies(savedMovies =>
          savedMovies.filter(movie => movie._id !== id)
        );
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  useEffect(() => {

    moviesApi.getMovies()
      .then((data) => {
        setCurrentMovies(data)

      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserData(currentUser)
        .then((data) => {
          setCurrentUser(data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getSavedMovies(currentUser._id)
        .then((movies) => {
          setSavedMovies(movies)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  function clearUserInfo() {
    setLoggedIn(false);
    setCurrentUser({
      name: '',
      email: '',
    });
    setCurrentMovies([])
    setSavedMovies([])
    setIsSubmitted(false);
    setSearchTerm('');
    setIsCheckboxChecked(false);
    localStorage.clear();
  }

  function handleSignOut() {
    localStorage.clear()
    mainApi.logout()
      .then(() => {
        clearUserInfo() 
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err.message)
      })
  }


  const handleIsSubmitted = () => {
    setIsSubmitted(true);
  }

  const changeCheckBox = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  }

  const changeSavedMoviesCheckBox = () => {
    setIsSavedMoviesCheckboxChecked(!isSavedMoviesCheckboxChecked);
  }
  const handleSearchCurrentMovies = () => {

    const filteredMovies = currentMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!isCheckboxChecked || movie.duration <= 40)
    );
    handleSubmitForm(filteredMovies)
  };

  const handleSearchSavedMovies = () => {

    const filteredSavedMovies = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchTermSavedMovies.toLowerCase()) &&
        (!isSavedMoviesCheckboxChecked || movie.duration <= 40)
    );
    handleSubmitSavedMoviesForm(filteredSavedMovies);
  }

  const handleSubmitForm = (filteredMovies) => {
    setFilteredMovies(filteredMovies);
  };

  const handleSubmitSavedMoviesForm = (filteredMovies) => {
    setFilteredSavedMovies(filteredMovies);
  };

  const handleChangeCurrentMovies = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChangeSavedMovies = (e) => {
    setSearchTermSavedMovies(e.target.value);
  };

  const handleSubmitCurrentMovies = (e) => {
    setIsLoading(true);
    e.preventDefault();
    handleSearchCurrentMovies();
    handleIsSubmitted();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmitSavedMovies = (e) => {
    setIsLoading(true);
    e.preventDefault();
    handleSearchSavedMovies()
    handleIsSubmitted();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    verifyToken()
    saveResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
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
        setDisplayedCardsDesktop(Math.min(maxDisplayedCardsDesktop, currentMovies.length));
        setDisplayedCardsMobile(Math.min(maxDisplayedCardsMobile, currentMovies.length));
        setShowButton(currentMovies.length > Math.max(maxDisplayedCardsDesktop, maxDisplayedCardsMobile));
      }, 300);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMovies]);

  const loadMoreMovies = () => {
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

  function saveResults() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    const savedIsCheckboxChecked = localStorage.getItem('isCheckboxChecked');
    const savedFilteredMovies = localStorage.getItem('filteredMovies');
    const savedCurrentMovies = localStorage.getItem('currentMovies');
    const savedisSubmitted = localStorage.getItem('isSubmitted')

    if (savedSearchTerm && savedIsCheckboxChecked && savedFilteredMovies && savedCurrentMovies && savedisSubmitted) {
      setSearchTerm(savedSearchTerm);
      setIsCheckboxChecked(JSON.parse(savedIsCheckboxChecked));
      setFilteredMovies(JSON.parse(savedFilteredMovies));
      setCurrentMovies(JSON.parse(savedCurrentMovies));
      setIsSubmitted(JSON.parse(savedisSubmitted));

    }
  }

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('isCheckboxChecked', isCheckboxChecked);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('currentMovies', JSON.stringify(currentMovies));
    localStorage.setItem('isSubmitted', JSON.stringify(isSubmitted));

  }, [searchTerm, isCheckboxChecked, filteredMovies, currentMovies, isSubmitted]);

  useEffect(() => {
    handleSearchSavedMovies()
    handleSearchCurrentMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckboxChecked, savedMovies])


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={{ savedMovies }}>
        <div className="App">

          <Routes>

            <Route path="/" element={<Main
              isLoggedIn={isLoggedIn}
            />} />

            <Route path="/movies" element={<ProtectedRoute element={

              <Movies
                currentMovies={currentMovies}
                isCheckboxChecked={isCheckboxChecked}
                onCheckboxChange={changeCheckBox}
                isLoggedIn={isLoggedIn}
                onSubmit={handleSubmitCurrentMovies}
                filteredMovies={filteredMovies}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
                onAddMovie={addMovie}
                onDeleteMovie={deleteMovie}
                onIsSubmitted={handleIsSubmitted}
                setIsLoading={setIsLoading}
                onChange={handleChangeCurrentMovies}
                searchTerm={searchTerm}
                showButton={showButton}
                loadMoreMovies={loadMoreMovies}
                displayedCardsDesktop={displayedCardsDesktop}
                displayedCardsMobile={displayedCardsMobile}
                isMoviesRoute={isMoviesRoute}

              />} isLoggedIn={isLoggedIn} />} />

            <Route path="/saved-movies" element={<ProtectedRoute element={

              <SavedMovies
                savedMovies={savedMovies}
                isCheckboxChecked={isSavedMoviesCheckboxChecked}
                onCheckboxChange={changeSavedMoviesCheckBox}
                filteredMovies={filteredSavedMovies}
                isLoggedIn={isLoggedIn}
                isSubmitted={isSubmitted}
                onSubmit={handleSubmitSavedMovies}
                onDeleteMovie={deleteMovie}
                onIsSubmitted={setIsSubmitted}
                setIsLoading={setIsLoading}
                onChange={handleChangeSavedMovies}
                searchTerm={searchTermSavedMovies}
              />} isLoggedIn={isLoggedIn} />} />

            <Route path="/profile" element={<ProtectedRoute element={

              <Profile
                isLoggedIn={isLoggedIn}
                handleUpdateUser={handleUpdateUser}
                onSignOut={handleSignOut}

              />} isLoggedIn={isLoggedIn} />} />

            <Route path="/signup" element={<Register
              onRegister={handleRegister}
            />} />

            <Route path="/signin" element={<Login
              onLogin={handleLogin}
            />} />

            <Route path="/*" element={< Page404
            />} />

          </Routes>
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
