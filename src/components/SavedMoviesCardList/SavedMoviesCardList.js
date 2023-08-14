import './SavedMoviesCardList.css';
import MovieCard from '../MoviesCard/MovieCard';
import FilmOne from '../../images/1.png'
import FilmTwo from '../../images/2.png'
import FilmThree from '../../images/3.png'

function SavedMoviesCardList() {

  return (

    <section className="savedmovies__list">
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
</div>
    </section>
  );
}

export default SavedMoviesCardList