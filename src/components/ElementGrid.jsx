import Element from './Element'
import { categories } from '../data/elements'

const ElementGrid = ({ elements, selectedElement, onElementClick }) => {
  const elementsByCategory = elements.reduce((acc, element) => {
    if (!acc[element.category]) {
      acc[element.category] = []
    }
    acc[element.category].push(element)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      {Object.entries(elementsByCategory).map(([category, categoryElements]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">{categories[category]}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categoryElements.map((element) => (
              <Element
                key={element.id}
                element={element}
                isSelected={selectedElement?.id === element.id}
                onClick={onElementClick}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ElementGrid 