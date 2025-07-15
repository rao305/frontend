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
    <div className="bg-minimal-card border border-minimal-border p-6 rounded-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-minimal-card border border-minimal-border flex items-center justify-center rounded-sm">
            <Bot className="w-5 h-5 text-minimal-text" />
          </div>
          <div>
            <h3 className="font-medium text-minimal-text text-base">AI Assistant</h3>
            <p className="text-sm text-minimal-text opacity-80">Ask me anything!</p>
          </div>
        </div>
        <Link
          to="/ai-assistant"
          className="text-minimal-text hover:opacity-80 text-sm font-medium transition-colors duration-200"
        >
          Open Chat
        </Link>
      </div>

      {!isExpanded ? (
        <div className="space-y-3">
          <p className="text-xs font-medium text-minimal-text uppercase tracking-wide mb-4 opacity-80">Quick questions:</p>
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setIsExpanded(true)}
              className="w-full text-left text-sm text-minimal-text p-3 bg-minimal-card border border-minimal-border hover:bg-minimal-hover transition-all duration-200 rounded-sm"
            >
              {question}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border border-minimal-border p-4 bg-minimal-card rounded-sm">
            <div className="flex items-start space-x-2 mb-3">
              <Bot className="w-5 h-5 text-minimal-text mt-0.5" />
              <p className="text-sm text-minimal-text">
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
              className="flex-1 text-sm border border-minimal-border bg-minimal-card text-minimal-text px-4 py-3 focus:outline-none focus:ring-1 focus:ring-minimal-border focus:border-minimal-border placeholder-minimal-text-light placeholder-opacity-60 rounded-sm"
            />
            <button className="bg-minimal-card border border-minimal-border text-minimal-text px-4 py-3 hover:bg-minimal-hover transition-colors duration-200 rounded-sm">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIWidget;