import React from 'react';
import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const DegreeProgress: React.FC = () => {
  const categories = [
    {
      name: 'Core Computer Science',
      completed: 24,
      total: 30,
      status: 'in-progress',
      color: 'blue',
      courses: ['CS 15900', 'CS 18000', 'CS 24000', 'CS 25000']
    },
    {
      name: 'Mathematics',
      completed: 18,
      total: 20,
      status: 'almost-complete',
      color: 'green',
      courses: ['MATH 16100', 'MATH 16200', 'MATH 26100']
    },
    {
      name: 'General Education',
      completed: 32,
      total: 32,
      status: 'complete',
      color: 'green',
      courses: ['ENGL 10600', 'COM 11400', 'CHM 11500']
    },
    {
      name: 'Technical Electives',
      completed: 6,
      total: 12,
      status: 'behind',
      color: 'yellow',
      courses: ['CS 19300']
    },
    {
      name: 'Free Electives',
      completed: 9,
      total: 26,
      status: 'behind',
      color: 'red',
      courses: ['SCLA 10100']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'almost-complete':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'behind':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-green-500';
      case 'almost-complete':
        return 'bg-blue-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'behind':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-purdue-black border border-purdue-gold p-6">
      <h2 className="text-xl font-bold text-purdue-gold mb-6">Degree Progress Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const percentage = (category.completed / category.total) * 100;
          
          return (
            <div key={index} className="border border-purdue-gold p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-purdue-gold">{category.name}</h3>
                {getStatusIcon(category.status)}
              </div>
              
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-purdue-gold opacity-80">
                    {category.completed}/{category.total} credits
                  </span>
                  <span className="text-sm font-medium text-purdue-gold">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-purdue-medium h-2">
                  <div
                    className="h-2 bg-purdue-gold transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-xs text-purdue-gold opacity-60">
                Recent: {category.courses.slice(-2).join(', ')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DegreeProgress;