import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainMenu from './pages/MainMenu'
import GameSelection from './pages/GameSelection'
import ComGame from './pages/ComGame'
import Walkthrough from './pages/Walkthrough'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/games" element={<GameSelection />} />
          <Route path="/game/comgame" element={<ComGame />} />
          <Route path="/game/chemistry" element={<div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Chemistry Lab</h1>
              <p className="text-gray-600">Coming soon!</p>
            </div>
          </div>} />
          <Route path="/game/space" element={<div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Space Explorer</h1>
              <p className="text-gray-600">Coming soon!</p>
            </div>
          </div>} />
          <Route path="/walkthrough" element={<Walkthrough />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
