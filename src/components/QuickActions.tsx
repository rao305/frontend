import React from 'react';
import { Search, FileText, GraduationCap, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Search,
      label: 'Search Courses',
      path: '/courses',
      color: 'bg-purdue-gold text-purdue-black hover:bg-purdue-light',
    },
    {
      icon: FileText,
      label: 'Upload Transcript',
      path: '/transcript',
      color: 'bg-purdue-medium text-purdue-gold hover:bg-purdue-light',
    },
    {
      icon: GraduationCap,
      label: 'Degree Audit',
      path: '/degree-audit',
      color: 'bg-purdue-light text-purdue-gold hover:bg-purdue-medium',
    },
    {
      icon: Calendar,
      label: 'Plan Semester',
      path: '/planner',
      color: 'bg-purdue-black text-purdue-gold border border-purdue-medium hover:bg-purdue-medium',
    },
  ];

  return (
    <div className="bg-purdue-black border border-purdue-medium p-6">
      <h3 className="text-base font-medium text-purdue-gold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className={`flex flex-col items-center space-y-2 p-4 transition-all duration-200 ${action.color}`}
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