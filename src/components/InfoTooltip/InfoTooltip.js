import './infoTooltip.css';
import succesfullPicture from '../../images/tooltip_succesfull.svg'
import unsuccesfullPicture from '../../images/tooltip-unsuccesfull.svg'

const InfoTooltip = ({isOpen, isSuccessfull, onClose}) => {
    return (
        <div className={`popup popup_tooltip ${isOpen ? "popup_opened" : ""}`}>
            <div className="tooltip__container">
                <img className="tooltip__image"
                    src={isSuccessfull ? succesfullPicture : unsuccesfullPicture}
                    alt={isSuccessfull ? 'упешная регистрация' : 'неуспешная регистрация'}
                />
                <p className="tooltip__text">
                    {isSuccessfull ? 'Данные успешно обновлены!' : 'При обновлении профиля произошла ошибка.'}
                </p>
                <button className="popup__closing-icon" type="button" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default InfoTooltip;
