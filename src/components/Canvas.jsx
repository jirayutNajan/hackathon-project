import { useEffect, useRef, useState } from 'react'
import { combinations } from '../data/elements'
import TemperatureControl from './TemperatureControl'

const Canvas = ({ onCombine, width = 600, height = 600, elementTemperatures, onTemperatureChange }) => {
  const canvasRef = useRef(null)
  const [elements, setElements] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [draggedElement, setDraggedElement] = useState(null)
  const [selectedElement, setSelectedElement] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const animationFrame = () => {
      drawCanvas(ctx)
      requestAnimationFrame(animationFrame)
    }
    animationFrame()
  }, [elements, draggedElement])

  const drawCanvas = (ctx) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)
    
    // Draw elements
    elements.forEach(element => {
      ctx.fillStyle = element.color || '#ffffff'
      ctx.strokeStyle = '#000000'
      ctx.lineWidth = 2
      
      // Draw element circle
      ctx.beginPath()
      ctx.arc(element.x, element.y, 30, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      
      // Draw element icon
      ctx.font = '20px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#000000'
      ctx.fillText(element.icon, element.x, element.y)

      // Draw temperature if element has temperature
      if (element.hasTemperature) {
        const temp = elementTemperatures[element.id] || element.defaultTemp
        ctx.font = '12px Arial'
        ctx.fillText(`${temp}°C`, element.x, element.y + 25)
      }
    })

    // Draw dragged element if exists
    if (draggedElement) {
      ctx.fillStyle = '#ffffff'
      ctx.strokeStyle = '#0000ff'
      ctx.lineWidth = 2
      
      ctx.beginPath()
      ctx.arc(draggedElement.x, draggedElement.y, 30, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      
      ctx.font = '20px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#000000'
      ctx.fillText(draggedElement.icon, draggedElement.x, draggedElement.y)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    try {
      const element = JSON.parse(e.dataTransfer.getData('text/plain'))
      // Add unique ID to the element
      const newElement = { 
        ...element, 
        x, 
        y,
        uniqueId: `${element.id}-${Date.now()}-${Math.random()}` 
      }
      setElements(prev => [...prev, newElement])
    } catch (error) {
      console.error('Failed to parse dropped element:', error)
    }
  }

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if clicked on an element
    const clickedElement = elements.find(element => {
      const distance = Math.sqrt(
        Math.pow(x - element.x, 2) + Math.pow(y - element.y, 2)
      )
      return distance <= 30
    })

    if (clickedElement) {
      setDraggedElement(clickedElement)
      setIsDragging(true)
      setSelectedElement(clickedElement)
    } else {
      setSelectedElement(null)
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !draggedElement) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setDraggedElement(prev => ({ ...prev, x, y }))
  }

  const handleMouseUp = (e) => {
    if (!isDragging || !draggedElement) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if element is dragged outside canvas boundaries
    const isOutsideCanvas = 
      x < 0 || 
      x > width || 
      y < 0 || 
      y > height

    if (isOutsideCanvas) {
      // Remove the element from the canvas
      setElements(prev => prev.filter(el => el.uniqueId !== draggedElement.uniqueId))
      setDraggedElement(null)
      setIsDragging(false)
      setSelectedElement(null)
      return
    }

    // Check for combinations
    const nearbyElements = elements.filter(element => {
      if (element.uniqueId === draggedElement.uniqueId) return false
      const distance = Math.sqrt(
        Math.pow(x - element.x, 2) +
        Math.pow(y - element.y, 2)
      )
      return distance <= 60
    })

    if (nearbyElements.length > 0) {
      // Calculate the midpoint between the two elements
      const midX = (x + nearbyElements[0].x) / 2
      const midY = (y + nearbyElements[0].y) / 2
      
      // Get the combination key
      const combinationKey = [draggedElement.id, nearbyElements[0].id].sort().join('-')
      const combination = combinations[combinationKey]

      if (combination) {
        // Remove the combined elements and add the new element
        setElements(prev => {
          const remainingElements = prev.filter(el => 
            el.uniqueId !== draggedElement.uniqueId && el.uniqueId !== nearbyElements[0].uniqueId
          )
          const newElement = {
            ...combination,
            x: midX,
            y: midY,
            uniqueId: `${combination.id}-${Date.now()}-${Math.random()}`
          }
          return [...remainingElements, newElement]
        })
        onCombine(draggedElement, nearbyElements[0])
      }
    } else {
      // Update the position of the dragged element
      setElements(prev => prev.map(el => 
        el.uniqueId === draggedElement.uniqueId ? { ...draggedElement, x, y } : el
      ))
    }

    setDraggedElement(null)
    setIsDragging(false)
  }

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="bg-white rounded-lg shadow-lg"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      {selectedElement && selectedElement.hasTemperature && (
        <TemperatureControl
          element={selectedElement}
          temperature={elementTemperatures[selectedElement.id] || selectedElement.defaultTemp}
          onChange={onTemperatureChange}
        />
      )}
    </div>
  )
}

export default Canvas