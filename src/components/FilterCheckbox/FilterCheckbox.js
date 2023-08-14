import './FilterCheckbox.css';
import checkboxActive from '../../images/checkbox-active.png'
import checkboxInactive from '../../images/checkbox-inactive.png'

function FilterCheckbox({isCheckboxChecked, onCheckboxChange}) {

    const handleImageClick = () => {
        onCheckboxChange(!isCheckboxChecked);
      };
    
    return (
        <div className="checkbox">
     <input className="checkbox__button" type="checkbox" checked={isCheckboxChecked} onChange={onCheckboxChange} />
        <img className="checkbox__image" src={isCheckboxChecked ? checkboxActive : checkboxInactive} alt="чекбокс" onClick={handleImageClick}/>
     <p className='checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox