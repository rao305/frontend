import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Bot, 
  FileText, 
  GraduationCap, 
  Calendar, 
  Search, 
  Settings,
  User
} from 'lucide-react';

const TopNavigation: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Bot, label: 'AI Assistant', path: '/ai-assistant', featured: true },
    { icon: FileText, label: 'Transcript', path: '/transcript' },
    { icon: GraduationCap, label: 'Degree Audit', path: '/degree-audit' },
    { icon: Calendar, label: 'Planner', path: '/planner' },
    { icon: Search, label: 'Courses', path: '/courses' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-gray-800" />
            </div>
            <span className="text-xl font-bold text-gray-100">Boiler AI</span>
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    item.featured
                      ? isActive
                        ? 'bg-yellow-600 text-gray-800 shadow-md'
                        : 'bg-yellow-600/10 text-yellow-400 hover:bg-yellow-600/20 border border-yellow-600/30'
                      : isActive 
                        ? 'bg-gray-700 text-gray-100 shadow-sm' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.featured && (
                    <span className="bg-yellow-700 text-gray-100 text-xs px-1.5 py-0.5 rounded-full font-semibold shadow-sm">
                      AI
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-100">John Doe</p>
              <p className="text-xs text-gray-400">CS • Junior</p>
            </div>
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm font-bold text-gray-800">JD</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;