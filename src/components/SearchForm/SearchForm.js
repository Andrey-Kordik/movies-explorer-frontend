import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function SearchForm({isCheckboxChecked, onCheckboxChange}) {
    return (
        <section className="searchform">
            <form className="searchform__container">
                <input className='searchform__input' placeholder='Фильм' required  minLength="2" maxLength="12" ></input>
                <button className='searchform__button'></button>
            </form>
            <FilterCheckbox
               isCheckboxChecked = {isCheckboxChecked}
               onCheckboxChange = {onCheckboxChange}
            />
        </section>
    );
}

export default SearchForm