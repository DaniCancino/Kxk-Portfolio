import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import Header from './components/Header/'
import ProjectScreen from './screens/ProjectScreen';
import ServicesScreen from './screens/ServicesScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/projects' element={<ProjectScreen />} />
        <Route path='/services' element={<ServicesScreen />} />
      </Routes>
    </div>
  );
}

export default App;
