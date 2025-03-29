import { useNavigate } from 'react-router-dom'

const MainMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Little Alchemy</h1>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/games')}
            className="w-full py-4 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold shadow-md hover:shadow-lg"
          >
            Start Game
          </button>
          <button
            className="w-full py-4 px-6 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-lg font-semibold shadow-md hover:shadow-lg"
          >
            How to Play
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainMenu 