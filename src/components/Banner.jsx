import useToggleDarkMode from '../hooks/useToggleDarkMode';
import useToggleLanguage from '../hooks/useToggleLanguage';

function Banner({darkMode, setDarkMode, isEnglish, setIsEnglish}) {
  const toggleDarkMode = useToggleDarkMode(setDarkMode);
  const toggleLanguage = useToggleLanguage(setIsEnglish);

  return (
    <div>
      <button className="button dark-mode-button" onClick={() => toggleDarkMode(darkMode)}>
        {darkMode ? 'Light mode' : 'Dark mode'}
      </button>
      <button className='button language-button' onClick={()=> toggleLanguage(isEnglish)}>
        {isEnglish ? 'ES' : 'EN'}
      </button>
    </div>
  )
}

export default Banner
