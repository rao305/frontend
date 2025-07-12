import React from 'react';

const ProgressChart: React.FC = () => {
  const requirements = [
    { name: 'Core CS', completed: 24, total: 30, color: 'bg-blue-500' },
    { name: 'Mathematics', completed: 18, total: 20, color: 'bg-green-500' },
    { name: 'General Education', completed: 32, total: 32, color: 'bg-yellow-500' },
    { name: 'Technical Electives', completed: 6, total: 12, color: 'bg-purple-500' },
    { name: 'Free Electives', completed: 9, total: 26, color: 'bg-pink-500' },
  ];

  return (
    <div className="space-y-4">
      {requirements.map((req, index) => {
        const percentage = (req.completed / req.total) * 100;
        
        return (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-28 text-sm font-medium text-gray-300">{req.name}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-400">{req.completed}/{req.total} credits</span>
                <span className="text-sm font-medium text-white">{percentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${req.color} transition-all duration-300`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressChart;