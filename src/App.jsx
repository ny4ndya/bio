import './App.css';
import Banner from './components/Banner.jsx';
import DataCard from './components/DataCard.jsx';
import Projects from './components/Projects.jsx';
import Socials from './components/Socials.jsx';
import Email from './components/Email.jsx';
import {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <>
      <Banner darkMode={darkMode} setDarkMode={setDarkMode} isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
      <DataCard darkMode={darkMode} isEnglish={isEnglish}/>
      <Projects darkMode={darkMode} isEnglish={isEnglish}/>
      <Socials darkMode={darkMode} isEnglish={isEnglish}/>
      <Email darkMode={darkMode} isEnglish={isEnglish}/>
    </>
  )
}

export default App
