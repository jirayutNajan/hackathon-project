const ScientificFact = ({ element, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-in">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Scientific Fact</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{element.icon}</span>
          <h3 className="text-xl font-semibold text-gray-800">{element.name}</h3>
        </div>

        <p className="text-gray-600 leading-relaxed">
          {element.description}
        </p>

        {element.requiresTemperature && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              Temperature required: {element.minTemp}°C - {element.maxTemp}°C
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ScientificFact 