import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <section className="portfolio">
            <p className='portfolio__heading'>Портфолио</p>
            <Link to="https://github.com/Andrey-Kordik/how-to-learn" className='portfolio__container' target="_blank">
                <p className='portfolio__workname'>Статичный сайт</p>
                <div className='porfolio__icon'>↗</div>
            </Link>
            <Link to="https://github.com/Andrey-Kordik/russian-travel" className='portfolio__container' target="_blank">
                <p className='portfolio__workname'>Адаптивный сайт</p>
                <div className='porfolio__icon'>↗</div>
            </Link>
            <Link to="https://github.com/Andrey-Kordik/react-mesto-auth" className='portfolio__container' target="_blank">
                <p className='portfolio__workname'>Одностраничное приложение</p>
                <div className='porfolio__icon'>↗</div>
            </Link>
        </section>
    );
}

export default Portfolio