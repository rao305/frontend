import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'yellow' | 'purple';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-500 text-blue-100',
    green: 'bg-green-500 text-green-100',
    yellow: 'bg-yellow-500 text-yellow-100',
    purple: 'bg-purple-500 text-purple-100',
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-100">{value}</p>
          <p className="text-sm text-gray-500 mt-1">{change}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;