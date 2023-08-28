import './FilterCheckbox.css';
import checkboxActive from '../../images/checkbox-active.png'
import checkboxInactive from '../../images/checkbox-inactive.png'

function FilterCheckbox({isCheckboxChecked, onChange }) {
    return (
        <div className="checkbox">
     <input className="checkbox__button" type="checkbox"  checked={isCheckboxChecked}
        onChange={onChange}/>
        <img className="checkbox__image" src={isCheckboxChecked ? checkboxActive : checkboxInactive} alt="чекбокс" />
     <p className='checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox