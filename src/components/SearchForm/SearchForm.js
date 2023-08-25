import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';


function SearchForm({ movies, isCheckboxChecked, onCheckboxChange, onSearch, onIsSubmitted, setIsLoading, getResults }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
 
        const filteredMovies = movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!isCheckboxChecked || movie.duration <= 40)
    );
    onSearch(filteredMovies)

  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    localStorage.setItem('searchTerm', searchTerm);

    setIsLoading(true);
    e.preventDefault();
    handleSearch();
    onIsSubmitted();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };



  useEffect(() => {
    handleSearch() 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckboxChecked ]);

  return (
    <section className="searchform">
      <form className="searchform__container"  onSubmit={handleSubmit}>
        <input
          className="searchform__input"
          placeholder="Фильм"
          required
          minLength="1"
          maxLength="12"
          value={searchTerm}
          onChange={handleChange}
        ></input>
        <button className="searchform__button" type="submit"></button>
      </form>
      <FilterCheckbox  
      isCheckboxChecked={isCheckboxChecked}
      onCheckboxChange={onCheckboxChange}

      
      
      />
    </section>
  );
}

export default SearchForm;