import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your Boiler AI assistant. I can help you with course planning, degree requirements, CODO information, and academic guidance. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const examplePrompts = [
    "What courses should I take next semester?",
    "How do I change my major to Computer Science?",
    "What are the prerequisites for CS 35200?",
    "Can you help me plan my remaining semesters?",
    "What minors complement Computer Science?",
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('next semester') || input.includes('courses')) {
      return "Based on your transcript and degree requirements, I recommend taking CS 25200 (Systems Programming), CS 24000 (Programming in C), and STAT 35000 (Statistics) next semester. These courses will keep you on track for graduation and fulfill important prerequisites for upper-level CS courses.";
    }
    
    if (input.includes('codo') || input.includes('change major')) {
      return "To change your major to Computer Science, you'll need to complete the CODO (Change of Degree Objective) process. Requirements include: a minimum 3.2 GPA, completion of CS 15900, CS 18000, and MATH 16100 with grades of C or better. The application deadline for Fall admission is typically in February.";
    }
    
    if (input.includes('cs 35200') || input.includes('prerequisites')) {
      return "CS 35200 (Compilers) has the following prerequisites: CS 25000 (Computer Architecture), CS 25100 (Data Structures), and CS 35100 (Programming Languages). You should also have a strong foundation in discrete mathematics.";
    }
    
    return "I understand you're looking for academic guidance. Could you provide more specific details about your question? I can help with course planning, degree requirements, prerequisites, CODO processes, and more!";
  };

  const handlePromptClick = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-gray-800 p-8 rounded-t-lg shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
            <Bot className="w-8 h-8 text-yellow-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Boiler AI Assistant</h1>
            <p className="text-gray-800 text-lg">Your intelligent academic advisor and course planning companion</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="bg-gray-800 bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                🎓 Academic Planning
              </span>
              <span className="bg-gray-800 bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                📚 Course Recommendations
              </span>
              <span className="bg-gray-800 bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                🔄 CODO Guidance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex">
        {/* Example Prompts Sidebar */}
        <div className="w-80 bg-gray-700 border-r border-gray-600 p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-3">💡 Try asking me...</h3>
            <div className="space-y-3">
              {examplePrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="w-full text-left p-4 bg-gray-600 rounded-lg hover:bg-gray-500 hover:border-yellow-600/30 border border-gray-500 transition-all text-sm text-gray-300 hover:text-gray-100 shadow-sm hover:shadow-md"
                >
                  <Sparkles className="w-4 h-4 inline mr-2 text-yellow-600" />
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h4 className="font-medium text-blue-400 mb-2">💡 Tips for better responses:</h4>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>• Be specific about your major and year</li>
              <li>• Mention specific courses you're considering</li>
              <li>• Ask about prerequisites and scheduling</li>
              <li>• Include your academic goals</li>
            </ul>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-2xl ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-yellow-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-gray-900" />
                    )}
                  </div>
                  <div className={`rounded-lg p-4 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 border border-gray-600 text-gray-100 shadow-sm'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center shadow-md">
                    <Bot className="w-5 h-5 text-gray-800" />
                  </div>
                  <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-600 bg-gray-700 p-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about your academic journey..."
                className="flex-1 border border-gray-500 bg-gray-600 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent placeholder-gray-400 shadow-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-yellow-600 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-md"
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;