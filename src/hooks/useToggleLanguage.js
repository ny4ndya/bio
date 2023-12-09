const useToggleLanguage = (setIsEnglish) => {
    return (isEnglish) => {
        setIsEnglish(!isEnglish);
    }
}

export default useToggleLanguage;