import { useGame } from '../hooks/useGame'
import Canvas from '../components/Canvas'
import ItemPanel from '../components/ItemPanel'
import Hint from '../components/Hint'
import ScientificFact from '../components/ScientificFact'
import DigitalLogicGame from '../components/DigitalLogicGame'
import BrookshearMachineGame from '../components/BrookshearMachineGame'
import CProgrammingGame from '../components/CProgrammingGame'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const MainGame = () => {
  const {
    elements,
    discoveredElements,
    resultHint,
    nextHint,
    elementTemperatures,
    handleTemperatureChange,
    handleCombine,
    resetGame,
    showScientificFact,
    newlyDiscoveredElement,
    setShowScientificFact,
    currentStage
  } = useGame()

  const [showDigitalLogicGame, setShowDigitalLogicGame] = useState(false)
  const [showBrookshearGame, setShowBrookshearGame] = useState(false)
  const [showCProgrammingGame, setShowCProgrammingGame] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    if (newlyDiscoveredElement?.game === 'digitalLogic') {
      setShowDigitalLogicGame(true)
    } else if (newlyDiscoveredElement?.game === 'brookshear') {
      setShowBrookshearGame(true)
    } else if (newlyDiscoveredElement?.game === 'comprog') {
      setShowCProgrammingGame(true)
    }
  }, [newlyDiscoveredElement])

  useEffect(() => {
    console.log('Game State Update:', {
      currentStage: currentStage?.name || 'No stage',
      discoveredElementsCount: discoveredElements.length,
      discoveredElements: discoveredElements.map(el => el.name),
      totalElements: elements.length + discoveredElements.length
    })
  }, [currentStage, discoveredElements, elements])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">Little Sparks</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/walkthrough")}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Walkthrough
              </button>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Reset Game
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Canvas Area */}
          <div className="flex-1 relative">
            <Canvas 
              onCombine={handleCombine}
              elementTemperatures={elementTemperatures}
              onTemperatureChange={handleTemperatureChange}
            />
          </div>

          {/* Item Panel */}
          <div className="w-64 bg-white shadow-lg">
            <ItemPanel
              elements={[...elements, ...discoveredElements]}
              onDragStart={(e, element) => {
                e.dataTransfer.setData('text/plain', JSON.stringify(element))
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto">
            <Hint resultHint={resultHint} nextHint={nextHint} />
          </div>
        </div>
      </div>

      {showScientificFact && newlyDiscoveredElement && (
        <ScientificFact
          element={newlyDiscoveredElement}
          onClose={() => setShowScientificFact(false)}
        />
      )}

      {showDigitalLogicGame && (
        <DigitalLogicGame
          onClose={() => setShowDigitalLogicGame(false)}
        />
      )}

      {showBrookshearGame && (
        <BrookshearMachineGame
          onClose={() => setShowBrookshearGame(false)}
        />
      )}

      {showCProgrammingGame && (
        <CProgrammingGame
          onClose={() => setShowCProgrammingGame(false)}
        />
      )}
    </div>
  )
}

export default MainGame