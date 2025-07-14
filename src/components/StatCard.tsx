import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: 'dark' | 'medium' | 'light';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color }) => {
  const colorClasses = {
    dark: 'bg-professional-black text-white',
    medium: 'bg-professional-dark text-white',
    light: 'bg-professional-medium text-white',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-professional hover:shadow-professional-lg transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-professional-medium uppercase tracking-wide mb-2">{title}</p>
          <p className="text-4xl font-light text-professional-black mb-1">{value}</p>
          <p className="text-sm text-professional-light">{change}</p>
        </div>
        <div className={`w-16 h-16 rounded-sm flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;