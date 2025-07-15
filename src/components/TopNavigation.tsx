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
    <nav className="bg-purdue-black border-b border-purdue-gold">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purdue-gold flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-purdue-black" />
            </div>
            <span className="text-xl font-medium text-purdue-gold tracking-tight">Boiler AI</span>
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
                  className={`flex items-center space-x-2 px-4 py-2 transition-all duration-200 font-medium ${
                    item.featured
                      ? isActive
                        ? 'bg-purdue-gold text-purdue-black'
                        : 'text-purdue-gold hover:bg-purdue-medium'
                      : isActive 
                        ? 'bg-purdue-medium text-purdue-gold' 
                        : 'text-purdue-gold hover:bg-purdue-medium'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-purdue-gold">John Doe</p>
              <p className="text-xs text-purdue-light">CS • Junior</p>
            </div>
            <div className="w-8 h-8 bg-purdue-gold flex items-center justify-center">
              <span className="text-sm font-semibold text-purdue-black">JD</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;