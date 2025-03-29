import React, { useState } from 'react';

const BrookshearMachineGame = ({ onClose }) => {
  const initialMemory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0];
  const [memory, setMemory] = useState(initialMemory);
  const [acc, setAcc] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const steps = [
    {
      instruction: 'LOAD',
      cell: 14,
      description: 'First, let\'s load the number 3 from cell 14 into the accumulator',
      expectedAcc: 3
    },
    {
      instruction: 'ADD',
      cell: 15,
      description: 'Now, let\'s add the number 2 from cell 15 to what\'s in the accumulator',
      expectedAcc: 5
    },
    {
      instruction: 'STORE',
      cell: 13,
      description: 'Finally, let\'s store the result (5) into cell 13',
      expectedAcc: 5,
      isLast: true
    }
  ];

  const handleInstruction = (action) => {
    if (action === 'LOAD') {
      const newAcc = memory[14];
      setAcc(newAcc);
      setCurrentStep(1);
    } else if (action === 'ADD') {
      const newAcc = acc + memory[15];
      setAcc(newAcc);
      setCurrentStep(2);
    } else if (action === 'STORE') {
      const updatedMemory = [...memory];
      updatedMemory[13] = acc;
      setMemory(updatedMemory);
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const getCurrentInstruction = () => {
    if (currentStep >= steps.length) return null;
    return steps[currentStep];
  };

  const instruction = getCurrentInstruction();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full shadow-xl border border-gray-200">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple Brookshear Machine</h2>
          <p className="text-lg text-gray-600">
            Let's add two numbers: 3 + 2 = 5
          </p>
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
          {showHint && (
            <div className="mt-2 p-4 bg-blue-50 rounded-lg text-left">
              <p className="font-medium">How to solve:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>LOAD the first number (3) from cell 14</li>
                <li>ADD the second number (2) from cell 15</li>
                <li>STORE the result (5) in cell 13</li>
              </ol>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Memory Display */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Memory Cells</h3>
            <div className="grid grid-cols-4 gap-2">
              {memory.map((value, index) => (
                <div 
                  key={index}
                  className={`p-3 border rounded text-center ${
                    index === 13 ? 'bg-yellow-50 border-yellow-300' :
                    index === 14 || index === 15 ? 'bg-blue-50 border-blue-300' :
                    'bg-white'
                  }`}
                >
                  <div className="text-sm text-gray-500">Cell {index}</div>
                  <div className="font-bold">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <div>🔵 Input cells (14: 3, 15: 2)</div>
              <div>🟡 Result cell (13)</div>
            </div>
          </div>

          {/* Controls */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Current Step</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{instruction?.description || 'Complete!'}</p>
                <div className="mt-2 font-bold">
                  Accumulator (ACC): {acc}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => handleInstruction('LOAD')}
                disabled={currentStep !== 0}
                className={`w-full p-3 rounded-lg text-white font-medium
                  ${currentStep === 0
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-300'
                  }`}
              >
                LOAD from cell 14
              </button>
              <button
                onClick={() => handleInstruction('ADD')}
                disabled={currentStep !== 1}
                className={`w-full p-3 rounded-lg text-white font-medium
                  ${currentStep === 1
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-300'
                  }`}
              >
                ADD from cell 15
              </button>
              <button
                onClick={() => handleInstruction('STORE')}
                disabled={currentStep !== 2}
                className={`w-full p-3 rounded-lg text-white font-medium
                  ${currentStep === 2
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-300'
                  }`}
              >
                STORE to cell 13
              </button>
            </div>
          </div>
        </div>

        {showSuccess && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center text-lg">
            🎉 Congratulations! You've successfully added the numbers using the Brookshear machine!
          </div>
        )}
      </div>
    </div>
  );
};

export default BrookshearMachineGame; 