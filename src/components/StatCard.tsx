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
    dark: 'bg-purdue-gold text-purdue-black',
    medium: 'bg-purdue-medium text-purdue-gold',
    light: 'bg-purdue-light text-purdue-gold',
  };

  return (
    <div className="bg-purdue-black border border-purdue-medium p-6 hover:border-purdue-gold transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-purdue-light uppercase tracking-wide mb-2">{title}</p>
          <p className="text-3xl font-light text-purdue-gold mb-1">{value}</p>
          <p className="text-sm text-purdue-light">{change}</p>
        </div>
        <div className={`w-12 h-12 flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;