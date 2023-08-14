import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';



function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  function handleLogin() {
    setLoggedIn(true)
  }
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
};


  return (
    <body className="App">

      <Routes>

        <Route path="/" element={<Main

          isLoggedIn={isLoggedIn}
        />} />
        <Route path="/movies" element={<Movies
          isLoggedIn={isLoggedIn}
          isCheckboxChecked = {isCheckboxChecked}
          onCheckboxChange={handleCheckboxChange}

        />} />
        <Route path="/saved-movies" element={<SavedMovies

          isLoggedIn={isLoggedIn}
          isCheckboxChecked = {isCheckboxChecked}
          onCheckboxChange={handleCheckboxChange}

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
    </body>
  );
}

export default App;
