import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exhibitions from './Page/Exhibitions';
import Navigator from './Components/Navigator/Navigator';
import Develope from './Page/Develope';
import Home from './Page/Home';
import Contact from './Page/Contact';


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
