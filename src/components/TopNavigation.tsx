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
    <nav className="bg-minimal-bg border-b border-minimal-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-minimal-card border border-minimal-border flex items-center justify-center rounded-sm">
              <GraduationCap className="w-5 h-5 text-minimal-text" />
            </div>
            <span className="text-xl font-medium text-minimal-text tracking-tight">Boiler AI</span>
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
                        ? 'bg-minimal-hover text-minimal-text border border-minimal-border'
                        : 'text-minimal-text hover:bg-minimal-hover border border-minimal-border'
                      : isActive 
                        ? 'bg-minimal-hover text-minimal-text border border-minimal-border' 
                        : 'text-minimal-text hover:bg-minimal-hover border border-minimal-border'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
                    <span className="bg-minimal-card text-minimal-text text-xs px-2 py-0.5 rounded-sm font-medium border border-minimal-border">
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-minimal-text">John Doe</p>
              <p className="text-xs text-minimal-text-light">CS • Junior</p>
            </div>
            <div className="w-8 h-8 bg-minimal-card border border-minimal-border flex items-center justify-center rounded-sm">
              <span className="text-sm font-semibold text-minimal-text">JD</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;