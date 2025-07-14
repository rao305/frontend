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
    <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-professional">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-professional-black rounded-sm flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-professional-black text-lg">AI Assistant</h3>
            <p className="text-sm text-professional-medium">Ask me anything!</p>
          </div>
        </div>
        <Link
          to="/ai-assistant"
          className="text-professional-black hover:text-professional-medium text-sm font-medium transition-colors duration-200"
        >
          Open Chat
        </Link>
      </div>

      {!isExpanded ? (
        <div className="space-y-3">
          <p className="text-sm font-medium text-professional-medium uppercase tracking-wide mb-4">Quick questions:</p>
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setIsExpanded(true)}
              className="w-full text-left text-sm text-professional-black p-4 rounded-sm bg-professional-lightest hover:bg-gray-200 transition-all duration-200 border border-gray-300 shadow-professional"
            >
              {question}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border border-gray-300 rounded-sm p-4 bg-professional-lightest">
            <div className="flex items-start space-x-2 mb-3">
              <Bot className="w-5 h-5 text-professional-black mt-0.5" />
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
              className="flex-1 text-sm border border-gray-300 bg-white text-professional-black rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-professional-black focus:border-transparent"
            />
            <button className="bg-professional-black text-white px-4 py-3 rounded-sm hover:bg-professional-dark transition-colors duration-200">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIWidget;