import './Techs.css';

function Techs() {
    return (
        <section className="techs" id="techs">
            <p className='techs__heading'>Технологии</p>
            <div className='techs__container'>
                <h2 className='techs__title'>7 технологий</h2>
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className='techs__box'>
                    <div className='techs__item'>HTML</div>
                    <div className='techs__item'>CSS</div>
                    <div className='techs__item'>JS</div>
                    <div className='techs__item'>React</div>
                    <div className='techs__item'>Git</div>
                    <div className='techs__item'>Express.js</div>
                    <div className='techs__item'>MongoDB</div>
                </div>
            </div>
        </section>
    );
}

export default Techs