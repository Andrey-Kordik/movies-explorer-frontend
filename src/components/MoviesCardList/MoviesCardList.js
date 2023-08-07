import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import FilmOne from '../../images/1.png'
import FilmTwo from '../../images/2.png'
import FilmThree from '../../images/3.png'
import FilmFour from '../../images/4.png'
import FilmFive from '../../images/5.png'
import FilmSix from '../../images/6.png'
import FilmSeven from '../../images/7.png'
import FilmEight from '../../images/8.png'
import FilmNine from '../../images/9.png'
import FilmTen from '../../images/10.png'
import FilmEleven from '../../images/11.png'
import FilmTwelve from '../../images/12.png'

function MoviesCardList() {

  return (

    <section className="movies__list">
      <div className='movies__container'>
      <MovieCard
        image={FilmOne}
        name="33 слова о дизайне"
        duration="1ч 17м"
        
      />
      <MovieCard
        image={FilmTwo}
        name="Киноальманах «100 лет дизайна»"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmThree}
        name="В погоне за Бенкси"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmFour}
        name="Баския: Взрыв реальности"
        duration="1ч 17м"
      />

      <MovieCard
        image={FilmFive}
        name="Бег это свобода"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmSix}
        name="Книготорговцы"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmSeven}
        name="Когда я думаю о Германии ночью"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmEight}
        name="Gimme Danger: История Игги и The Stooges"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmNine}
        name="Дженис: Маленькая девочка грустит"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmTen}
        name="Соберись перед прыжком"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmEleven}
        name="Пи Джей Харви: A dog called money"
        duration="1ч 17м"
      />
      <MovieCard
        image={FilmTwelve}
        name="По волнам: Искусство звука в кино"
        duration="1ч 17м"
      />

</div>
<button className='movies__more-button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList