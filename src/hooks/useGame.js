import { useState, useCallback } from 'react'
import { initialElements, combinations } from '../data/elements'

export const useGame = () => {
  const [elements, setElements] = useState(initialElements)
  const [discoveredElements, setDiscoveredElements] = useState([])
  const [resultHint, setResultHint] = useState('')
  const [nextHint, setNextHint] = useState('make sand')

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
      setResultHint(`${element1.name} + ${element2.name} = ${combination.name}!`)
      setNextHint(combination.hint.replace('Next: ', ''))
      
      // Clear the result hint after 3 seconds
      setTimeout(() => {
        setResultHint('')
      }, 3000)
    } else {
      setResultHint(`${element1.name} + ${element2.name} cannot be combined`)
      // Clear the error hint after 2 seconds
      setTimeout(() => {
        setResultHint('')
      }, 2000)
    }
  }, [])

  const resetGame = useCallback(() => {
    setElements(initialElements)
    setDiscoveredElements([])
    setResultHint('')
    setNextHint('make sand')
  }, [])

  return {
    elements,
    discoveredElements,
    resultHint,
    nextHint,
    handleCombine,
    resetGame
  }
}