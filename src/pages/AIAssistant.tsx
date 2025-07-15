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
    <div className="min-h-screen flex flex-col bg-minimal-bg border border-minimal-border rounded-sm">
      {/* Header */}
      <div className="bg-minimal-card border-b border-minimal-border p-8">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-minimal-card border border-minimal-border flex items-center justify-center rounded-sm">
            <Bot className="w-8 h-8 text-minimal-text" />
          </div>
          <div>
            <h1 className="text-3xl font-light tracking-tight mb-2 text-minimal-text">Boiler AI Assistant</h1>
            <p className="text-minimal-text opacity-80 text-base font-light">Your intelligent academic advisor and course planning companion</p>
            <div className="flex items-center space-x-4 mt-4">
              <span className="bg-minimal-card border border-minimal-border px-3 py-1 text-xs font-medium text-minimal-text rounded-sm">
                🎓 Academic Planning
              </span>
              <span className="bg-minimal-card border border-minimal-border px-3 py-1 text-xs font-medium text-minimal-text rounded-sm">
                📚 Course Recommendations
              </span>
              <span className="bg-minimal-card border border-minimal-border px-3 py-1 text-xs font-medium text-minimal-text rounded-sm">
                🔄 CODO Guidance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex">
        {/* Example Prompts Sidebar */}
        <div className="w-96 bg-minimal-card border-r border-minimal-border p-8">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-minimal-text mb-6">💡 Try asking me...</h3>
            <div className="space-y-4">
              {examplePrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="w-full text-left p-6 bg-minimal-card border border-minimal-border hover:bg-minimal-hover transition-all duration-200 text-sm text-minimal-text rounded-sm"
                >
                  <Sparkles className="w-5 h-5 inline mr-3 text-minimal-text" />
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-minimal-card border border-minimal-border p-6 rounded-sm">
            <h4 className="font-semibold text-minimal-text mb-4">💡 Tips for better responses:</h4>
            <ul className="text-sm text-minimal-text opacity-80 space-y-2">
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
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-4 max-w-3xl ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-12 h-12 flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-minimal-hover border border-minimal-border' 
                      : 'bg-minimal-card border border-minimal-border'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-6 h-6 text-minimal-text" />
                    ) : (
                      <Bot className="w-6 h-6 text-minimal-text" />
                    )}
                  </div>
                  <div className={`p-6 ${
                    message.sender === 'user'
                      ? 'bg-minimal-hover text-minimal-text border border-minimal-border'
                      : 'bg-minimal-card border border-minimal-border text-minimal-text'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-3 ${
                      message.sender === 'user' ? 'text-minimal-text opacity-60' : 'text-minimal-text opacity-60'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-minimal-card border border-minimal-border flex items-center justify-center rounded-sm">
                    <Bot className="w-6 h-6 text-minimal-text" />
                  </div>
                  <div className="bg-minimal-card border border-minimal-border p-6 rounded-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-minimal-text rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-minimal-text rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-minimal-text rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-minimal-border bg-minimal-card p-8">
            <div className="flex space-x-6">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about your academic journey..."
                className="flex-1 border border-minimal-border bg-minimal-card text-minimal-text px-6 py-4 focus:outline-none focus:ring-1 focus:ring-minimal-border focus:border-minimal-border placeholder-minimal-text-light placeholder-opacity-60 text-base rounded-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-minimal-card border border-minimal-border text-minimal-text px-8 py-4 hover:bg-minimal-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 font-medium rounded-sm"
              >
                <Send className="w-6 h-6" />
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