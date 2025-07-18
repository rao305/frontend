import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  FileText, 
  Bot, 
  Settings,
  GraduationCap,
  User
} from 'lucide-react';

const TopNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/planner', label: 'Planner', icon: Calendar },
    { path: '/courses', label: 'Courses', icon: BookOpen },
    { path: '/transcript', label: 'Transcript', icon: FileText },
    { path: '/degree-audit', label: 'Degree Audit', icon: GraduationCap },
    { path: '/ai-assistant', label: 'AI Assistant', icon: Bot },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="bg-subtle-card border-b border-subtle-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-subtle-text rounded-sm flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-medium text-subtle-text">Boiler Planner</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-sm text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-subtle-hover text-subtle-text'
                      : 'text-subtle-text-secondary hover:bg-subtle-hover hover:text-subtle-text'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-subtle-hover border border-subtle-border rounded-sm flex items-center justify-center">
              <User className="w-4 h-4 text-subtle-text" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;