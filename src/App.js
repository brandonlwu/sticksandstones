import './App.css';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import RulesPage from'./pages/RulesPage';
import IntroductionPage from'./pages/IntroductionPage';
import LearnPage from './pages/LearnPage';
import ConclusionPage from './pages/ConclusionPage'
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import { SticksProvider } from './SticksContext';


function App() {
  return (
    <SticksProvider>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="intro" element={<IntroductionPage/>} />
            <Route path="rules" element={<RulesPage/>} />
            <Route path="game" element={<GamePage/>} />
            <Route path="conclusion" element={<ConclusionPage/>} />
            <Route path="learn" element={<LearnPage/>} />
          </Routes>
        </HashRouter>
      </div>
    </SticksProvider>
  );
}

export default App;
