import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon }) => {
  return (
    <div className="bg-purdue-black border border-purdue-gold p-6 hover:border-purdue-gold hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-purdue-gold uppercase tracking-wide mb-2 opacity-80">{title}</p>
          <p className="text-3xl font-light text-purdue-gold mb-1">{value}</p>
          <p className="text-sm text-purdue-gold opacity-80">{change}</p>
        </div>
        <div className="w-12 h-12 bg-purdue-gold flex items-center justify-center">
          <Icon className="w-6 h-6 text-purdue-black" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;