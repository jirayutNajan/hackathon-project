import { useState, useCallback } from 'react'
import { initialElements, combinations, stages } from '../data/elements'

export const useGame = () => {
  const [elements, setElements] = useState(initialElements)
  const [discoveredElements, setDiscoveredElements] = useState([])
  const [resultHint, setResultHint] = useState('')
  const [currentStageIndex, setCurrentStageIndex] = useState(0)

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

      // Check if this combination completes the current stage
      const currentStage = stages[currentStageIndex]
      if (combination.id === currentStage.id) {
        setResultHint(`Stage ${currentStageIndex + 1} Complete: ${combination.name}!`)
        setCurrentStageIndex(prev => prev + 1)
      } else {
        setResultHint(`${element1.name} + ${element2.name} = ${combination.name}!`)
      }
      
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
  }, [currentStageIndex])

  const resetGame = useCallback(() => {
    setElements(initialElements)
    setDiscoveredElements([])
    setResultHint('')
    setCurrentStageIndex(0)
  }, [])

  // Get the current stage's name as the next hint
  const nextHint = currentStageIndex < stages.length 
    ? `Create ${stages[currentStageIndex].name}`
    : 'Congratulations! You\'ve completed all stages!'

  return {
    elements,
    discoveredElements,
    resultHint,
    nextHint,
    currentStage: stages[currentStageIndex],
    handleCombine,
    resetGame
  }
}