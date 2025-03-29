import React, { useState, useEffect } from 'react';
import ComputerEvolutionSummary from './ComputerEvolutionSummary';

const CProgrammingGame = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showCongrats, setShowCongrats] = useState(true);

  const exercises = [
    {
      title: 'Hello World',
      description: 'Write a C program to print "Hello, World!"',
      template: '#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}',
      solution: 'printf("Hello, World!");',
      hint: 'Use printf() function to print text'
    },
    {
      title: 'Variables',
      description: 'Declare an integer variable named "number" and assign it the value 42',
      template: '#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}',
      solution: 'int number = 42;',
      hint: 'Use int keyword to declare an integer variable'
    },
    {
      title: 'Print Variable',
      description: 'Print the value of the variable "number"',
      template: '#include <stdio.h>\n\nint main() {\n    int number = 42;\n    // Your code here\n    return 0;\n}',
      solution: 'printf("%d", number);',
      hint: 'Use printf() with %d format specifier for integers'
    }
  ];

  const handleSubmit = () => {
    const currentExercise = exercises[currentStep];
    const isAnswerCorrect = userInput.trim() === currentExercise.solution;
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    if (isAnswerCorrect) {
      setTimeout(() => {
        if (currentStep < exercises.length - 1) {
          setCurrentStep(prev => prev + 1);
          setUserInput('');
          setShowFeedback(false);
        } else {
          setShowSummary(true);
        }
      }, 1500);
    }
  };

  const currentExercise = exercises[currentStep];

  useEffect(() => {
    if (showCongrats) {
      const timer = setTimeout(() => setShowCongrats(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showCongrats]);

  // Scroll wheel event listener
  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      // Scroll down
      setCurrentStep((prev) => Math.min(prev + 1, exercises.length - 1));
    } else {
      // Scroll up
      setCurrentStep((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  if (showSummary) {
    return <ComputerEvolutionSummary onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full shadow-xl border border-gray-200 overflow-y-auto">
        {showCongrats && (
          <div className="text-center mb-4 animate-fade-in">
            <h2 className="text-3xl font-bold text-green-600">🎉 Congratulations on starting your C Programming Journey! 🎉</h2>
          </div>
        )}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">C Programming Challenge</h2>
          <p className="text-lg text-gray-600">
            Complete these C programming exercises to learn the basics!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Exercise Description */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{currentExercise.title}</h3>
            <p className="text-gray-700 mb-4">{currentExercise.description}</p>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              {currentExercise.template}
            </div>
            <div className="mt-4">
              <button
                onClick={() => setShowFeedback(!showFeedback)}
                className="text-blue-500 hover:text-blue-700"
              >
                {showFeedback ? 'Hide Hint' : 'Show Hint'}
              </button>
              {showFeedback && (
                <p className="mt-2 text-gray-600">{currentExercise.hint}</p>
              )}
            </div>
          </div>

          {/* Code Editor */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Your Code</h3>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full h-32 p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your code here..."
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleSubmit}
                className="flex-1 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
              >
                Submit
              </button>
              <button
                onClick={onClose}
                className="flex-1 p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
              >
                Close
              </button>
            </div>

            {showFeedback && (
              <div className={`mt-4 p-4 rounded-lg ${
                isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {isCorrect ? '✅ Correct!' : '❌ Try again!'}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Exercise {currentStep + 1} of {exercises.length}
        </div>
      </div>
    </div>
  );
};

export default CProgrammingGame; 