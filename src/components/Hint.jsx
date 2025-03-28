const Hint = ({ resultHint, nextHint }) => {
  return (
    <>
      {/* Next Step Hint - Top */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white shadow-lg rounded-lg px-6 py-2 text-gray-700 border border-gray-200">
          <div className="flex items-center gap-2">
            <span className="font-medium">Next:</span>
            <span>{nextHint}</span>
          </div>
        </div>
      </div>

      {/* Result Hint - Bottom */}
      {resultHint && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white shadow-lg rounded-lg px-6 py-2 text-gray-700 border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="font-medium">{resultHint}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hint 