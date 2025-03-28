import { categories } from '../data/elements'

const ItemPanel = ({ elements, onDragStart }) => {
  const elementsByCategory = elements.reduce((acc, element) => {
    if (!acc[element.category]) {
      acc[element.category] = []
    }
    acc[element.category].push(element)
    return acc
  }, {})

  const handleDragStart = (e, element) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', JSON.stringify(element))
    onDragStart(e, element)
  }

  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4 overflow-y-auto h-[600px]">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Elements</h2>
      <div className="space-y-6">
        {Object.entries(elementsByCategory).map(([category, categoryElements]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-medium text-gray-500">{categories[category]}</h3>
            <div className="grid grid-cols-2 gap-2">
              {categoryElements.map((element) => (
                <div
                  key={element.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, element)}
                  className="w-16 h-16 rounded-full bg-white shadow-md flex flex-col items-center justify-center cursor-move hover:shadow-lg transition-shadow"
                >
                  <span className="text-2xl mb-1">{element.icon}</span>
                  <span className="text-xs font-medium">{element.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemPanel