import './Profile.css';
import Header from '../Header/Header.js';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import useFormWithValidation from '../../utils/FormValidation';

function Profile({ isLoggedIn, handleUpdateUser, onSignOut}) {
    const { values, errors, isValid = false, setValues, handleChange, setIsValid } = useFormWithValidation();
    const [isEditMode, setIsEditMode] = useState(false);


    const currentUser = useContext(CurrentUserContext)

    function changeUserInfo(event) {
        event.preventDefault();
        handleUpdateUser({
            name: values.name,
            email: values.email,
        })
        setIsValid(false)
    }

    const handleEditButtonClick = () => {
        if (isEditMode) {
            setIsEditMode(false);
        } else {
            setIsEditMode(true);
        }
    };

    useEffect(() => {
        setValues(currentUser)
    }, [setValues, currentUser])

    function handleSignOut() {
        onSignOut()
    }

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main>
                <section className="profile">
                    <h1 className='profile__heading'>Привет, {currentUser.name}!</h1>
                    <form className="profile__form" onSubmit={changeUserInfo}>
                        <fieldset className="profile__inputs">
                            <div className="profile__input-container">
                                <label className="profile__label">Имя</label>
                                <input
                                    name="name"
                                    type="text"
                                    minLength="2"
                                    maxLength="20"
                                    className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                                    value={values.name || ''}
                                    readOnly={!isEditMode}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.name && <span className="profile__error">{errors.name}</span>}
                            <div className="profile__input-container">
                                <label className="profile__label">E-mail</label>
                                <input
                                    name="email"
                                    type="email"
                                    className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                                    value={values.email || ''}
                                    readOnly={!isEditMode}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.email && <span className="profile__error">{errors.email}</span>}
                        </fieldset>
                       
                        {isEditMode ? (<>
                          
                            <button className='profile__save-button' onClick={handleEditButtonClick} disabled={(values.name === currentUser.name
                                && values.email === currentUser.email) || !isValid}>
                                Сохранить
                            </button>
                        </>
                        ) : (<>
                        
                            <button className='profile__edit-button' onClick={handleEditButtonClick}>
                                Редактировать
                            </button>
                            <button className='profile__logout-button' onClick={handleSignOut}><Link className='profile__logout__link' to="/">Выйти из аккаунта</Link></button>
                        </>
                        )}
                    </form>
                </section>
            </main>
        </>
    );
}


export default Profile