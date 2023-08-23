import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';


function SearchForm({ movies, isCheckboxChecked, onCheckboxChange, onSearch, onIsSubmitted}) {

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

  useEffect(() => {
    handleSearch() 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isCheckboxChecked ]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSearch();
    onIsSubmitted()

    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('isCheckboxChecked', isCheckboxChecked);
    
  };


  //useEffect(() => {
    //const savedSearchTerm = localStorage.getItem('searchTerm');
    //const savedIsCheckboxChecked = localStorage.getItem('isCheckboxChecked');

   // if (savedSearchTerm && savedIsCheckboxChecked) {
     //setSearchTerm(savedSearchTerm);
     //onCheckboxChange(savedIsCheckboxChecked === 'true');
    //}
  //}, []);



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