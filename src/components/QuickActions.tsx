import React from 'react';
import { Search, FileText, GraduationCap, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Search,
      label: 'Search Courses',
      path: '/courses',
      color: 'bg-professional-black hover:bg-professional-dark',
    },
    {
      icon: FileText,
      label: 'Upload Transcript',
      path: '/transcript',
      color: 'bg-professional-dark hover:bg-professional-black',
    },
    {
      icon: GraduationCap,
      label: 'Degree Audit',
      path: '/degree-audit',
      color: 'bg-professional-medium hover:bg-professional-dark',
    },
    {
      icon: Calendar,
      label: 'Plan Semester',
      path: '/planner',
      color: 'bg-professional-light hover:bg-professional-medium',
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-professional">
      <h3 className="text-lg font-semibold text-professional-black mb-6">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className={`flex flex-col items-center space-y-3 p-6 rounded-sm text-white transition-all duration-200 shadow-professional hover:shadow-professional-lg ${action.color}`}
            >
              <Icon className="w-7 h-7" />
              <span className="text-sm font-medium text-center leading-tight">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;