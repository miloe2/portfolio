import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exhibitions from './pages/Exhibitions';
import Navigator from './components/navigator/Navigator';
import Develope from './pages/Develope';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Router basename="/portfolio.ts.vite">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/develope" element={<Develope/>}/>
        <Route path="/exhibitions" element={<Exhibitions/>}/>
      </Routes>
      <Navigator/>
      <Contact/>
    </Router>

    </>
  );
}

export default App;
