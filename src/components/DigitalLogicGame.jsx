import React, { useState } from 'react';

const DigitalLogicGame = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const gateKnowledge = {
    AND: {
      description: "AND gate outputs 1 only when both inputs are 1. Otherwise, it outputs 0.",
      image: '/src/assets/andgate.png'
    },
    OR: {
      description: "OR gate outputs 1 when at least one input is 1. It only outputs 0 when both inputs are 0.",
      image: '/src/assets/orgate.png'
    },
    XOR: {
      description: "XOR gate outputs 1 when the inputs are different. It outputs 0 when both inputs are the same.",
      image: '/src/assets/xorgate.png'
    }
  };

  const questions = [
    {
      image: '/src/assets/and-gate.png',
      correctAnswer: '0',
      explanation: 'AND gate requires both inputs to be 1 to output 1'
    },
    {
      image: '/src/assets/or-gate.png',
      correctAnswer: '1',
      explanation: 'OR gate outputs 1 when at least one input is 1'
    },
    {
      image: '/src/assets/xor-gate.png',
      correctAnswer: '0',
      explanation: 'XOR gate outputs 0 when both inputs are the same'
    }
  ];

  const handleSubmit = () => {
    setShowResult(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setTimeout(() => {
        if (currentQuestion < 2) {
          setCurrentQuestion(prev => prev + 1);
          setAnswer('');
          setShowResult(false);
        } else {
          onClose();
        }
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-xl border border-gray-200">
        {/* Knowledge Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Logic Gates Knowledge</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(gateKnowledge).map(([gate, info]) => (
              <div key={gate} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{gate} Gate</h3>
                <p className="text-gray-600 mb-4">{info.description}</p>
                <div className="flex justify-center">
                  <img 
                    src={info.image} 
                    alt={`${gate} Gate`}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Question Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}/3</h3>
          <div className="flex justify-center mb-6">
            <img 
              src={questions[currentQuestion].image} 
              alt={`Logic gate question ${currentQuestion + 1}`}
              className="max-w-md"
            />
          </div>
          <div className="flex justify-center gap-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer (0 or 1)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Result Section */}
        {showResult && (
          <div className="text-center">
            {answer === questions[currentQuestion].correctAnswer ? (
              <div className="text-green-500 font-bold">Correct! {questions[currentQuestion].explanation}</div>
            ) : (
              <div className="text-red-500 font-bold">Incorrect! Try again!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalLogicGame; 