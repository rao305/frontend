import React from 'react';

const ProgressChart: React.FC = () => {
  const requirements = [
    { name: 'Core CS', completed: 24, total: 30, color: 'bg-professional-black' },
    { name: 'Mathematics', completed: 18, total: 20, color: 'bg-professional-dark' },
    { name: 'General Education', completed: 32, total: 32, color: 'bg-professional-medium' },
    { name: 'Technical Electives', completed: 6, total: 12, color: 'bg-professional-light' },
    { name: 'Free Electives', completed: 9, total: 26, color: 'bg-gray-400' },
  ];

  return (
    <div className="space-y-6">
      {requirements.map((req, index) => {
        const percentage = (req.completed / req.total) * 100;
        
        return (
          <div key={index} className="flex items-center space-x-6">
            <div className="w-32 text-sm font-medium text-professional-black">{req.name}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-professional-medium">{req.completed}/{req.total} credits</span>
                <span className="text-sm font-semibold text-professional-black">{percentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${req.color} transition-all duration-500`}
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