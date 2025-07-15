import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SettingsSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="bg-purdue-black border border-purdue-gold p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-purdue-gold flex items-center justify-center">
          <Icon className="w-5 h-5 text-purdue-black" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-purdue-gold">{title}</h2>
          <p className="text-sm text-purdue-gold opacity-80">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SettingsSection;