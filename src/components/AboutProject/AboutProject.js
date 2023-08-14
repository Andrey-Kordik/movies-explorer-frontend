import './AboutProject.css';

function AboutProject () {
    return (
      <section className="about" id="about">
        <h2 className='about__heading'>О проекте</h2>
        <div className='about__texts'>
            <div className ='about__text-block'>
            <p className='about__main-text'>Дипломный проект включал 5 этапов</p>
            <p className='about__extra-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className ='about__text-block'>
            <p className='about__main-text'>На выполнение диплома ушло 5 недель</p>
            <p className='about__extra-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className='about__graphic'>
            <div className='about__graphic-backend'>1 неделя</div>
            <div className='about__graphic-frontend'>4 недели</div>
            <p className='about__graphic-text'>Back-end</p>
            <p className='about__graphic-text'>Front-end</p>
        </div>
      </section>
    );
  }
  
  export default AboutProject