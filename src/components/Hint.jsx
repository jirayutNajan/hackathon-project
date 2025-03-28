const Hint = ({ hint }) => {
  if (!hint) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="bg-white shadow-lg rounded-full px-6 py-3 text-gray-700">
        {hint}
      </div>
    </div>
  )
}

export default Hint 