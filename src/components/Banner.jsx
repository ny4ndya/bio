import useToggleDarkMode from '../hooks/useToggleDarkMode';
import useToggleLanguage from '../hooks/useToggleLanguage';
import "./Banner.scss";
import moonIcon from '../assets/moon-icon.svg';
import sunIcon from '../assets/sun-icon.svg';

function Banner({darkMode, setDarkMode, isEnglish, setIsEnglish}) {
  const toggleDarkMode = useToggleDarkMode(setDarkMode);
  const toggleLanguage = useToggleLanguage(setIsEnglish);

  return (
    <div className={`banner dark-mode-${!darkMode}`}>
    <button className="button dark-mode-button" onClick={() => toggleDarkMode(darkMode)}>
      {
        darkMode ? <img src={moonIcon} alt="moon icon" height='30px'/> : <img src={sunIcon} alt="sun icon" height='40px'/>
      }
      </button>
      <button className='button language-button' onClick={()=> toggleLanguage(isEnglish)}>
        {isEnglish ? <p className={`language-text dark-mode-${!darkMode}`}>ES</p> : <p className={`language-text dark-mode-${!darkMode}`}>EN</p>}
      </button>
    </div>
  )
}

export default Banner
