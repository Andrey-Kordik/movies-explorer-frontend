import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm({
  isCheckboxChecked, 
  onCheckboxChange, 
  onSubmit, 
  onChange,
  searchTerm }) {

 
  return (
    <section className="searchform">
      <form className="searchform__container" onSubmit={  onSubmit }>
        <input
          className="searchform__input"
          placeholder="Фильм"
          required
          minLength="1"
          maxLength="12"
          value={searchTerm}
          onChange={onChange}
        ></input>
        <button className="searchform__button" type="submit"></button>
      </form>
      <FilterCheckbox
        isCheckboxChecked={isCheckboxChecked}
        onChange={onCheckboxChange}

      />
    </section>
  );
}

export default SearchForm;
