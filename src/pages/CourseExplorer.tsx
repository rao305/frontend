import React, { useState } from 'react';
import { Search, Filter, BookOpen, Users, Clock, Star } from 'lucide-react';
import CourseFilters from '../components/CourseFilters';
import CourseList from '../components/CourseList';

const CourseExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Explorer</h1>
        
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses by code, title, or instructor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
              showFilters 
                ? 'bg-yellow-500 text-gray-900' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="lg:col-span-1">
            <CourseFilters />
          </div>
        )}

        {/* Course List */}
        <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Total Courses</p>
                  <p className="text-xl font-bold text-gray-900">2,847</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">CS Courses</p>
                  <p className="text-xl font-bold text-gray-900">127</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-500">This Semester</p>
                  <p className="text-xl font-bold text-gray-900">1,234</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <Star className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500">Avg Rating</p>
                  <p className="text-xl font-bold text-gray-900">4.2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Results */}
          <CourseList searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default CourseExplorer;