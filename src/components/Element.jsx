const Element = ({ element, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(element)}
      className={`
        w-20 h-20 rounded-full flex flex-col items-center justify-center
        transition-all duration-200 transform hover:scale-110
        ${isSelected ? 'bg-blue-500 text-white' : 'bg-white shadow-md'}
      `}
    >
      <span className="text-3xl mb-1">{element.icon}</span>
      <span className="text-xs font-medium">{element.name}</span>
    </button>
  )
}

export default Element 