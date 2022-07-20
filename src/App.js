import './App.css';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import RulesPage from'./pages/RulesPage';
import IntroductionPage from'./pages/IntroductionPage';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="intro" element={<IntroductionPage/>} />
          <Route path="rules" element={<RulesPage/>} />
          <Route path="game" element={<GamePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
