import { useNavigate } from 'react-router-dom'

const GameSelection = () => {
  const navigate = useNavigate()

  const games = [
    {
      id: 'comgame',
      name: 'Computer Evolution',
      description: 'Learn about computer evolution from basic elements to programming',
      icon: '🖥️',
      path: '/game/comgame'
    },
    {
      id: 'dummy1',
      name: 'Chemistry Lab',
      description: 'Mix elements and discover chemical reactions',
      icon: '🧪',
      path: '/game/chemistry'
    },
    {
      id: 'dummy2',
      name: 'Space Explorer',
      description: 'Build your own solar system and explore space',
      icon: '🚀',
      path: '/game/space'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Select Game</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to Menu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map(game => (
            <div
              key={game.id}
              onClick={() => navigate(game.path)}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{game.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{game.name}</h2>
              <p className="text-gray-600">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameSelection 