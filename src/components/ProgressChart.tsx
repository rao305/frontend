import React from 'react';

const ProgressChart: React.FC = () => {
  const requirements = [
    { name: 'Core CS', completed: 24, total: 30 },
    { name: 'Mathematics', completed: 18, total: 20 },
    { name: 'General Education', completed: 32, total: 32 },
    { name: 'Technical Electives', completed: 6, total: 12 },
    { name: 'Free Electives', completed: 9, total: 26 },
  ];

  return (
    <div className="space-y-4">
      {requirements.map((req, index) => {
        const percentage = (req.completed / req.total) * 100;
        
        return (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-28 text-sm font-medium text-minimal-text">{req.name}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-minimal-text opacity-80">{req.completed}/{req.total} credits</span>
                <span className="text-sm font-medium text-minimal-text">{percentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-minimal-hover h-2 rounded-sm">
                <div
                  className="h-2 bg-minimal-text transition-all duration-500 rounded-sm"
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