import './AboutMe.css';
import myPhoto from '../../images/myPhoto.jpg'
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <section className="student" id="student">
            <p className='student__heading'>Студент</p>
            <div className='student__container'>
                <div className='student__info'>
                    <h2 className='student__name'>Андрей</h2>
                    <p className='student__profession'>Фронтенд-разработчик, 30 лет</p>
                    <p className='student__text'>Я живу в Тольятти, закончил педагогический факультет в Самаре по специальности "Иностранный язык". Свободно владею английским языком.У меня есть жена
                        и собака. Я люблю играть в компьютерные игры, и путешествовать. Хочу стать frontend разработчиком и в будущем иметь удаленную работу.</p>
                <Link to= "https://github.com/Andrey-Kordik" className='student__github' target="_blank">Github</Link>
                </div>
                <img className="student__photo" src={myPhoto} alt="фото студента"></img>

            </div>
        </section>
    );
}

export default AboutMe