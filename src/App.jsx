import { useGame } from './hooks/useGame'
import Canvas from './components/Canvas'
import ItemPanel from './components/ItemPanel'
import Hint from './components/Hint'
import './App.css'

function App() {
  const {
    elements,
    discoveredElements,
    resultHint,
    nextHint,
    handleCombine,
    resetGame
  } = useGame()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Little Alchemy</h1>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Reset Game
          </button>
        </div>

        <div className="flex gap-6">
          {/* Canvas Area */}
          <div className="flex-1">
            <Canvas onCombine={handleCombine} />
          </div>

          {/* Item Panel */}
          <ItemPanel
            elements={[...elements, ...discoveredElements]}
            onDragStart={(e, element) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(element))
            }}
          />
        </div>

        <Hint resultHint={resultHint} nextHint={nextHint} />
      </div>
    </div>
  )
}

export default App
