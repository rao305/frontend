import React from 'react';
import { Search, FileText, GraduationCap, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Search,
      label: 'Search Courses',
      path: '/courses',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: FileText,
      label: 'Upload Transcript',
      path: '/transcript',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: GraduationCap,
      label: 'Degree Audit',
      path: '/degree-audit',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      icon: Calendar,
      label: 'Plan Semester',
      path: '/planner',
      color: 'bg-yellow-500 hover:bg-yellow-600',
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className={`flex flex-col items-center space-y-2 p-4 rounded-lg text-gray-100 transition-colors shadow-md ${action.color}`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium text-center">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;