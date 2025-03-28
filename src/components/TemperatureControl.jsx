const TemperatureControl = ({ element, temperature, onChange }) => {
  if (!element.hasTemperature) return null

  return (
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 w-48">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{element.name} Temperature</span>
        <span className="text-sm font-medium text-gray-700">{temperature}°C</span>
      </div>
      <input
        type="range"
        min={element.minTemp}
        max={element.maxTemp}
        value={temperature}
        onChange={(e) => onChange(element.id, parseInt(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{element.minTemp}°C</span>
        <span>{element.maxTemp}°C</span>
      </div>
    </div>
  )
}

export default TemperatureControl 