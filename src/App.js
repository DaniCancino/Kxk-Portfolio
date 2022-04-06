import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import Header from './components/Header/'
import ProjectScreen from './screens/ProjectScreen';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/projects' element={<ProjectScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
