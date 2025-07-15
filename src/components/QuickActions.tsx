import React from 'react';
import { Search, FileText, GraduationCap, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Search,
      label: 'Search Courses',
      path: '/courses',
    },
    {
      icon: FileText,
      label: 'Upload Transcript',
      path: '/transcript',
    },
    {
      icon: GraduationCap,
      label: 'Degree Audit',
      path: '/degree-audit',
    },
    {
      icon: Calendar,
      label: 'Plan Semester',
      path: '/planner',
    },
  ];

  return (
    <div className="bg-purdue-black border border-purdue-gold p-6">
      <h3 className="text-base font-medium text-purdue-gold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className="flex flex-col items-center space-y-2 p-4 bg-purdue-black border border-purdue-gold text-purdue-gold hover:bg-purdue-medium transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium text-center leading-tight">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;