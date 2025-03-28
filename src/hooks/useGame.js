import { useState, useCallback } from 'react'
import { initialElements, combinations } from '../data/elements'

export const useGame = () => {
  const [elements, setElements] = useState(initialElements)
  const [discoveredElements, setDiscoveredElements] = useState([])
  const [hint, setHint] = useState('')

  const handleCombine = useCallback((element1, element2) => {
    
    const combinationKey = [element1.id, element2.id].sort().join('-')
    
    const combination = combinations[combinationKey]

    if (combination) {
      setDiscoveredElements(prev => {
        if (!prev.find(el => el.id === combination.id)) {
          return [...prev, combination]
        }
        return prev
      })
      setHint(`New combination discovered: ${element1.name} + ${element2.name} = ${combination.name}!`)
    } 
    else {
      setHint(`${element1.name} + ${element2.name} cannot be combined`)
    }
  }, [])

  const resetGame = useCallback(() => {
    setElements(initialElements)
    setDiscoveredElements([])
    setHint('')
  }, [])

  return {
    elements,
    discoveredElements,
    hint,
    handleCombine,
    resetGame
  }
} 