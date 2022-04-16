import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import Header from './components/Header/'
import ProjectScreen from './screens/ProjectScreen';
import ServicesScreen from './screens/ServicesScreen';
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/projects' element={<ProjectScreen />} />
          <Route path='/services' element={<ServicesScreen />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
