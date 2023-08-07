import './Profile.css';
import Header from '../Header/Header.js';
import React, { useState } from 'react';

function Profile({ isLoggedIn, onLogin }) {

    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Андрей");
    const [email, setEmail] = useState("kordik000@mail.ru");
  
    const handleEditButtonClick = () => {
      setIsEditMode(!isEditMode);
    };
  
    const handleInputChange = (event) => {
      if (event.target.name === "name") {
        setName(event.target.value);
      } else if (event.target.name === "email") {
        setEmail(event.target.value);
      }
    };

    return (
        <section className="profile">
            <Header
                isLoggedIn={isLoggedIn}
                onLogin={onLogin}
            />
            <h1 className='profile__heading'>Привет, {name}!</h1>
            <form className="profile__form">
                <fieldset className="profile__inputs">
                    <div className="profile__input-container">
                        <label className="profile__label">Имя</label>
                        <input
                            name="name"
                            type="text"
                            className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                            value= {name}
                            readOnly={!isEditMode}
                            onChange= {handleInputChange}
                        />
                    </div>
                    <div className="profile__input-container">
                        <label className="profile__label">E-mail</label>
                        <input
                            name="email"
                            type="text"
                            className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                            value={email}
                            readOnly={!isEditMode}
                            onChange = {handleInputChange}
                        />
                    </div>
                </fieldset>
                {isEditMode ? (
                    <button className='profile__save-button' onClick={handleEditButtonClick}>
                        Сохранить
                    </button>
                ) : (<>
                    <button className='profile__edit-button' onClick={handleEditButtonClick}>
                        Редактировать
                    </button>
                    <button className='profile__logout-button'>Выйти из аккаунта</button>
                </>
                )}
            </form>
        </section>
    );
}


export default Profile