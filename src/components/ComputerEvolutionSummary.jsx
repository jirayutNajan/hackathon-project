import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ComputerEvolutionSummary = ({ onClose }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const evolutionSteps = [
    {
      title: 'Basic Materials',
      items: [
        'Sand (Silicon) - The foundation of modern electronics',
        'Metal - Essential for conducting electricity',
        'Copper - Excellent conductor for electrical circuits',
        'Gold - Used for reliable connections in computer components'
      ]
    },
    {
      title: 'Power & Control',
      items: [
        'Electricity - The power source for all computer operations',
        'Semi-conductor - Controls the flow of electricity',
        'Transistor - The building block of digital circuits'
      ]
    },
    {
      title: 'Computer Components',
      items: [
        'CPU - The brain of the computer that processes instructions',
        'Computer - The complete system that brings everything together'
      ]
    },
    {
      title: 'Programming',
      items: [
        'C Programming - A fundamental programming language',
        'Machine Language - The lowest level of programming',
        'High-level Programming - Making computers do complex tasks'
      ]
    },
    {
      title: 'Advanced Computing',
      items: [
        'Parallel Computing - Processing multiple calculations simultaneously',
        'Distributed Systems - Networks of computers working together',
        'Cloud Computing - Delivering computing services over the internet'
      ]
    },
    {
      title: 'Modern Applications',
      items: [
        'Artificial Intelligence - Computers that can learn and adapt',
        'Machine Learning - Systems that improve with experience',
        'Big Data - Processing extremely large datasets',
        'Internet of Things - Connected devices sharing data'
      ]
    }
  ];

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-lg p-8 max-w-4xl w-full shadow-xl border border-gray-200 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🎉 Congratulations! 🎉</h2>
          <p className="text-xl text-gray-600">
            You've successfully learned how to build a computer from scratch!
          </p>
        </div>

        {/* Add custom scrollbar styles */}
        <style>
          {`
            .custom-scrollbar {
              overflow-y: scroll; /* Ensure scroll is enabled */
              height: 24rem; /* Fixed height */
              scrollbar-width: thin; /* For Firefox */
              scrollbar-color: #a0aec0 #edf2f7; /* For Firefox */
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px; /* Width of the scrollbar */
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: #a0aec0; /* Scrollbar thumb color */
              border-radius: 4px; /* Rounded edges */
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background-color: #edf2f7; /* Scrollbar track color */
            }
          `}
        </style>

        <div className="custom-scrollbar">
          {evolutionSteps.map((step, index) => (
            <div key={index} className="step-card">
              <h3 className="step-title">{step.title}</h3>
              <ul className="step-items">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="step-item">
                    <span className="checkmark">✓</span>
                    <span className="item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/games')}
            className="continue-button"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerEvolutionSummary;