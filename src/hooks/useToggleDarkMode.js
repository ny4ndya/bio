const useToggleDarkMode = (setDarkMode) => {
    return (darkMode) => {
        setDarkMode(!darkMode);
        }
  }

export default useToggleDarkMode;