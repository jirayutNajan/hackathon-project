import React, { useState, useEffect } from 'react';

const BrookshearMachineGame = ({ onClose }) => {
  const initialMemory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0];
  const [memory, setMemory] = useState(initialMemory);
  const [acc, setAcc] = useState(0);
  const [connectedBlocks, setConnectedBlocks] = useState([]);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepFeedback, setStepFeedback] = useState('');

  const opcodeBlocks = [
    {
      id: 'load',
      opcode: '0001 1110',
      description: 'LOAD from cell 14 (2)',
      explanation: 'The LOAD instruction (0001) copies a value from memory into the accumulator. The operand (1110) specifies memory cell 14 in binary.',
      correctPosition: 0
    },
    {
      id: 'add',
      opcode: '0010 1101',
      description: 'ADD from cell 13 (3)',
      explanation: 'The ADD instruction (0010) adds a value from memory to the accumulator. The operand (1101) specifies memory cell 13 in binary.',
      correctPosition: 1
    },
    {
      id: 'store',
      opcode: '0011 1111',
      description: 'STORE to cell 15 (5)',
      explanation: 'The STORE instruction (0011) copies the accumulator value into a memory cell. The operand (1111) specifies memory cell 15 in binary.',
      correctPosition: 2
    },
    {
      id: 'halt',
      opcode: '0000 0000',
      description: 'HALT',
      explanation: 'The HALT instruction (0000) stops program execution.',
      correctPosition: 3
    }
  ];

  const handleDragStart = (e, blockId) => {
    e.dataTransfer.setData('text/plain', blockId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (isRunning) return;

    const blockId = e.dataTransfer.getData('text/plain');
    const block = opcodeBlocks.find(b => b.id === blockId);
    
    if (!block || connectedBlocks.some(b => b.id === blockId)) return;

    setConnectedBlocks(prev => [...prev, block]);
  };

  const handleRun = () => {
    if (connectedBlocks.length !== 4) {
      setShowError(true);
      return;
    }

    // Check if blocks are in correct order
    const isCorrect = connectedBlocks.every((block, index) => 
      block.correctPosition === index
    );

    if (!isCorrect) {
      setShowError(true);
      return;
    }

    setIsRunning(true);
    setShowError(false);
    setCurrentStep(0);
    setStepFeedback('');

    // Execute the program
    let currentAcc = 0;
    let step = 0;

    const executeStep = () => {
      if (step >= connectedBlocks.length) {
        setShowSuccess(true);
        setTimeout(() => onClose(), 3000);
        return;
      }

      const block = connectedBlocks[step];
      let feedback = '';
      
      switch (block.id) {
        case 'load':
          currentAcc = memory[14];
          feedback = `Loading value ${memory[14]} from cell 14 into accumulator`;
          break;
        case 'add':
          currentAcc += memory[13];
          feedback = `Adding ${memory[13]} from cell 13 to accumulator (${currentAcc - memory[13]} + ${memory[13]} = ${currentAcc})`;
          break;
        case 'store':
          setMemory(prev => {
            const newMemory = [...prev];
            newMemory[15] = currentAcc;
            return newMemory;
          });
          feedback = `Storing result ${currentAcc} into cell 15`;
          break;
        case 'halt':
          feedback = 'Program completed successfully!';
          break;
      }
      
      setAcc(currentAcc);
      setCurrentStep(step);
      setStepFeedback(feedback);
      step++;
    };

    // Execute each step with a delay
    const interval = setInterval(executeStep, 1500);
    return () => clearInterval(interval);
  };

  const handleReset = () => {
    setConnectedBlocks([]);
    setShowError(false);
    setShowSuccess(false);
    setIsRunning(false);
    setAcc(0);
    setMemory(initialMemory);
    setCurrentStep(0);
    setStepFeedback('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full shadow-xl border border-gray-200">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Brookshear Machine Programmer</h2>
          <p className="text-lg text-gray-600">
            Mission: Add two numbers (3 + 2 = 5)
          </p>
          <a 
            href="https://w3.cs.jmu.edu/mayfiecs/cs101/unit03/machine-language.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
          >
            Learn about Brookshear Machine Instructions
          </a>
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-2 text-blue-500 hover:text-blue-700 block mx-auto"
          >
            {showHint ? 'Hide Hints' : 'Show Hints'}
          </button>
          {showHint && (
            <div className="mt-2 p-4 bg-blue-50 rounded-lg text-left">
              <p className="font-medium">Instruction Hints:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>0001 1110: Loads a value from memory cell 14 (contains 2)</li>
                <li>0010 1101: Adds a value from memory cell 13 (contains 3)</li>
                <li>0011 1111: Stores the result into memory cell 15</li>
                <li>0000 0000: Stops program execution</li>
              </ul>
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
                    index === 15 ? 'bg-yellow-50 border-yellow-300' :
                    index === 13 || index === 14 ? 'bg-blue-50 border-blue-300' :
                    'bg-white'
                  }`}
                >
                  <div className="text-sm text-gray-500">Cell {index}</div>
                  <div className="font-bold">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <div>🔵 Input cells (14: 2, 13: 3)</div>
              <div>🟡 Result cell (15)</div>
            </div>
            <div className="mt-4 font-bold">
              Accumulator (ACC): {acc}
            </div>
          </div>

          {/* Program Blocks */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Available Instructions</h3>
              <div className="grid grid-cols-2 gap-2">
                {opcodeBlocks.map(block => (
                  <div
                    key={block.id}
                    draggable={!isRunning && !connectedBlocks.some(b => b.id === block.id)}
                    onDragStart={(e) => handleDragStart(e, block.id)}
                    className={`p-3 rounded-lg text-white font-medium cursor-move
                      ${connectedBlocks.some(b => b.id === block.id)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                  >
                    <div className="font-mono text-sm">{block.opcode}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Program Area</h3>
              <div 
                className="min-h-[100px] border-2 border-dashed border-gray-300 rounded-lg p-4"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex flex-wrap gap-2">
                  {connectedBlocks.map((block, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded-lg font-mono text-sm ${
                        isRunning && index === currentStep
                          ? 'bg-green-100 border-2 border-green-500'
                          : 'bg-gray-100'
                      }`}
                    >
                      {block.opcode}
                    </div>
                  ))}
                  {connectedBlocks.length === 0 && (
                    <div className="text-gray-400 text-center w-full py-4">
                      Drag and drop instructions here
                    </div>
                  )}
                </div>
              </div>
              {isRunning && stepFeedback && (
                <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-blue-700">
                  {stepFeedback}
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleRun}
                disabled={isRunning || connectedBlocks.length !== 4}
                className={`flex-1 p-3 rounded-lg text-white font-medium
                  ${isRunning || connectedBlocks.length !== 4
                    ? 'bg-gray-300'
                    : 'bg-green-500 hover:bg-green-600'
                  }`}
              >
                Run Program
              </button>
              <button
                onClick={handleReset}
                disabled={isRunning}
                className={`flex-1 p-3 rounded-lg text-white font-medium
                  ${isRunning
                    ? 'bg-gray-300'
                    : 'bg-red-500 hover:bg-red-600'
                  }`}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {showError && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg text-center text-lg">
            ❌ Error: Please connect all instructions in the correct order!
          </div>
        )}

        {showSuccess && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center text-lg">
            🎉 Congratulations! You've successfully created a program that adds the numbers!
          </div>
        )}
      </div>
    </div>
  );
};

export default BrookshearMachineGame; 