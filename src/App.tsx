import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exhibitions from './pages/Exhibitions';
import Navigator from './components/common/Navigator';
import Develope from './pages/Develope';
import Home from './pages/Home';

// max-w-7xl 1280px 분기 설정
function App() {
  return (
    <>
      <Router basename="/portfolio.ts.vite">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/develope" element={<Develope />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
        </Routes>
        <Navigator />
      </Router>

    </>
  );
}

export default App;
