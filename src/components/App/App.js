import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const [savedMovies,setSavedMovies] = useState([]);



  const navigate = useNavigate()

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
      .then((user) => {
        console.log(user)
        navigate("/signin")
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
 

  function handleSignOut() {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear()
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
function addMovie (movie) {
  mainApi.addMovies({

      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image:  'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail:  'https://api.nomoreparties.co' + movie.image.url,
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
  mainApi
    .deleteMovies(id)
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



  const handleSubmitForm = (filteredMovies) => {
    setFilteredMovies(filteredMovies);
};


const handleIsSubmitted = () => {
  setIsSubmitted(true);
}

const changeCheckBox = () => {
  setIsCheckboxChecked(!isCheckboxChecked);
}



useEffect(() => {
  verifyToken()

}, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={{savedMovies}}>
      <div className="App">

        <Routes>

          <Route path="/" element={<Main
            isLoggedIn={isLoggedIn}
          />} />

          <Route path="/movies" element={ <ProtectedRoute element= {

          <Movies
          currentMovies={currentMovies}
          isCheckboxChecked={isCheckboxChecked}
          onCheckboxChange={changeCheckBox}
          isLoggedIn={isLoggedIn}
          onSearch={handleSubmitForm}
          filteredMovies={filteredMovies}
          isSubmitted={isSubmitted}
          isLoading={isLoading}
          onAddMovie = {addMovie}
          onDeleteMovie = {deleteMovie}
          onIsSubmitted = {handleIsSubmitted}
          setIsLoading = {setIsLoading}
          setIsCheckboxChecked ={setIsCheckboxChecked}
      
          
      
          />} isLoggedIn={isLoggedIn} />} />

          <Route path="/saved-movies" element={<ProtectedRoute element={
          
          <SavedMovies
          savedMovies={savedMovies}
          isCheckboxChecked={isCheckboxChecked}
          onCheckboxChange={changeCheckBox}
          filteredMovies={filteredMovies}
          isLoggedIn={isLoggedIn}
          onSearch={handleSubmitForm}
          onDeleteMovie = {deleteMovie}
          onIsSubmitted = {setIsSubmitted}
          setIsLoading = {setIsLoading}
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
