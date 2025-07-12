import React, { useState } from 'react';
import { MessageCircle, Bot, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');

  const quickQuestions = [
    "What should I take next semester?",
    "How's my degree progress?",
    "Prerequisites for CS 35200?",
  ];

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-gray-900" />
          </div>
          <div>
            <h3 className="font-semibold text-white">AI Assistant</h3>
            <p className="text-sm text-gray-400">Ask me anything!</p>
          </div>
        </div>
        <Link
          to="/ai-assistant"
          className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
        >
          Open Chat
        </Link>
      </div>

      {!isExpanded ? (
        <div className="space-y-2">
          <p className="text-sm text-gray-400 mb-3">Quick questions:</p>
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setIsExpanded(true)}
              className="w-full text-left text-sm text-gray-300 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="border border-gray-700 rounded-lg p-3">
            <div className="flex items-start space-x-2 mb-3">
              <Bot className="w-5 h-5 text-yellow-500 mt-0.5" />
              <p className="text-sm text-gray-300">
                Hi! I can help you with course planning, degree requirements, and academic guidance. What would you like to know?
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 text-sm border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 text-gray-900 p-2 rounded-lg hover:bg-yellow-600 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIWidget;