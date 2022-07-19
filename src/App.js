import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import RulesPage from'./pages/RulesPage';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="rules" element={<RulesPage/>} />
          <Route path="game" element={<GamePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
