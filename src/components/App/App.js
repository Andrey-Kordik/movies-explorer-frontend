import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SavedMovies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';



function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)


  function handleLogin() {
    setLoggedIn(true)
  }
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Main

          isLoggedIn={isLoggedIn}
        />} />
        <Route path="/movies" element={<Movies
          isLoggedIn={isLoggedIn}

        />} />
        <Route path="/saved-movies" element={<SavedMovies

          isLoggedIn={isLoggedIn}

        />} />
        <Route path="/profile" element={<Profile

isLoggedIn={isLoggedIn}

        />} />

        <Route path="/signup" element={<Register

        />} />

        <Route path="/signin" element={<Login
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
        />} />

        <Route path="/*" element={< Page404
        />} />

      </Routes>
    </div>
  );
}

export default App;
