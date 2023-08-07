import './Navtab.css';

function NavTab () {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }

    return (
      <nav className="navtab">
        <button className='navtab__button' onClick={() => scrollToSection('about')}>О проекте</button>
        <button className='navtab__button' onClick={() => scrollToSection('techs')}>Технологии</button>
        <button className='navtab__button' onClick={() => scrollToSection('student')}>Студент</button>
      </nav>
    );
  }
  
  export default NavTab