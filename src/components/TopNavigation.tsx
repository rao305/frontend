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
    <nav className="bg-white border-b border-gray-200 shadow-professional">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-professional-black rounded-sm flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-professional-black tracking-tight">Boiler AI</span>
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-sm transition-all duration-200 font-medium ${
                    item.featured
                      ? isActive
                        ? 'bg-professional-black text-white shadow-professional'
                        : 'bg-professional-lightest text-professional-black hover:bg-gray-200 border border-gray-300'
                      : isActive 
                        ? 'bg-professional-dark text-white shadow-professional' 
                        : 'text-professional-medium hover:bg-professional-lightest hover:text-professional-black'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                  {item.featured && (
                    <span className="bg-professional-black text-white text-xs px-2 py-1 rounded-sm font-semibold">
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
              <p className="text-sm font-medium text-professional-black">John Doe</p>
              <p className="text-xs text-professional-medium">CS • Junior</p>
            </div>
            <div className="w-10 h-10 bg-professional-black rounded-sm flex items-center justify-center">
              <span className="text-sm font-semibold text-white">JD</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;