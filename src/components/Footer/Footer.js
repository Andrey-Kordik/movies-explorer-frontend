import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className='footer_text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__year'>&copy; 2023</p>
                <ul className='footer__data'>
                    <li><Link to="https://practicum.yandex.ru/" className='footer__info' target="_blank">Яндекс.Практикум</Link></li>
                   <li><Link to="https://github.com/" className='footer__info' target="_blank">Github</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer