import './Profile.css';
import Header from '../Header/Header.js';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Profile({ isLoggedIn, handleUpdateUser, onSignOut}) {


    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const currentUser = useContext(CurrentUserContext)

    const changeUserInfo= (event) => {
        event.preventDefault();
        handleUpdateUser({name: name, email: email});
        setIsEditMode(false)
    }


    const handleEditButtonClick = () => {
        if (isEditMode) {
          handleUpdateUser({ name, email });
        } else {
          setIsEditMode(true);
        }
      };

    const handleInputChange = (event) => {
        if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "email") {
            setEmail(event.target.value);
        }
    };
    
    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]); 

    function handleSignOut() {
        onSignOut()
    }
    console.log(name)
    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main>
                <section className="profile">
                    <h1 className='profile__heading'>Привет, {name}!</h1>
                    <form className="profile__form" onSubmit={changeUserInfo}>
                        <fieldset className="profile__inputs">
                            <div className="profile__input-container">
                                <label className="profile__label">Имя</label>
                                <input
                                    name="name"
                                    type="text"
                                    className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                                    value={name || ""}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="profile__input-container">
                                <label className="profile__label">E-mail</label>
                                <input
                                    name="email"
                                    type="text"
                                    className={isEditMode ? 'profile__input' : 'profile__input profile__input--readonly'}
                                    value={email || ""}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
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