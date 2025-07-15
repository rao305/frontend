import React from 'react';

const ProgressChart: React.FC = () => {
  const requirements = [
    { name: 'Core CS', completed: 24, total: 30, color: 'bg-purdue-gold' },
    { name: 'Mathematics', completed: 18, total: 20, color: 'bg-purdue-medium' },
    { name: 'General Education', completed: 32, total: 32, color: 'bg-purdue-light' },
    { name: 'Technical Electives', completed: 6, total: 12, color: 'bg-purdue-gold' },
    { name: 'Free Electives', completed: 9, total: 26, color: 'bg-purdue-medium' },
  ];

  return (
    <div className="space-y-4">
      {requirements.map((req, index) => {
        const percentage = (req.completed / req.total) * 100;
        
        return (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-28 text-sm font-medium text-purdue-gold">{req.name}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purdue-light">{req.completed}/{req.total} credits</span>
                <span className="text-sm font-medium text-purdue-gold">{percentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-purdue-medium h-2">
                <div
                  className={`h-2 ${req.color} transition-all duration-500`}
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