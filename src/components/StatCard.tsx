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
    <div className="bg-minimal-card border border-minimal-border p-6 hover:bg-minimal-hover hover:shadow-sm transition-all duration-200 rounded-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-minimal-text uppercase tracking-wide mb-2 opacity-80">{title}</p>
          <p className="text-3xl font-light text-minimal-text mb-1">{value}</p>
          <p className="text-sm text-minimal-text opacity-80">{change}</p>
        </div>
        <div className="w-12 h-12 bg-minimal-card border border-minimal-border flex items-center justify-center rounded-sm">
          <Icon className="w-6 h-6 text-minimal-text" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;