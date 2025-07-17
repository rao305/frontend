import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  FileText, 
  Settings, 
  Bot,
  GraduationCap 
} from 'lucide-react';

const TopNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'AI Assistant', icon: Bot },
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/course-explorer', label: 'Courses', icon: BookOpen },
    { path: '/planner', label: 'Planner', icon: Calendar },
    { path: '/degree-audit', label: 'Degree Audit', icon: GraduationCap },
    { path: '/transcript', label: 'Transcript', icon: FileText },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="bg-subtle-grey border-b border-subtle-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-subtle-text rounded-sm flex items-center justify-center">
                <Bot className="w-5 h-5 text-subtle-grey" />
              </div>
              <span className="text-lg font-medium text-subtle-text">Boiler AI</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-sm text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-subtle-hover text-subtle-text'
                        : 'text-subtle-secondary hover:bg-subtle-hover hover:text-subtle-text'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs text-subtle-secondary">Spring 2025</p>
              <p className="text-sm font-medium text-subtle-text">John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;