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
      <div className="bg-purdue-black border border-purdue-gold p-6 mb-6">
        <h1 className="text-3xl font-bold text-purdue-gold mb-4">Course Explorer</h1>
        
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purdue-gold w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses by code, title, or instructor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-purdue-gold bg-purdue-black text-purdue-gold focus:outline-none focus:ring-2 focus:ring-purdue-gold focus:border-transparent placeholder-purdue-gold placeholder-opacity-60"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
              showFilters 
                ? 'bg-purdue-gold text-purdue-black' 
                : 'bg-purdue-black border border-purdue-gold text-purdue-gold hover:bg-purdue-medium'
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
            <div className="bg-purdue-black border border-purdue-gold p-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-purdue-gold" />
                <div>
                  <p className="text-sm text-purdue-gold opacity-80">Total Courses</p>
                  <p className="text-xl font-bold text-purdue-gold">2,847</p>
                </div>
              </div>
            </div>
            <div className="bg-purdue-black border border-purdue-gold p-4">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-purdue-gold" />
                <div>
                  <p className="text-sm text-purdue-gold opacity-80">CS Courses</p>
                  <p className="text-xl font-bold text-purdue-gold">127</p>
                </div>
              </div>
            </div>
            <div className="bg-purdue-black border border-purdue-gold p-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-purdue-gold" />
                <div>
                  <p className="text-sm text-purdue-gold opacity-80">This Semester</p>
                  <p className="text-xl font-bold text-purdue-gold">1,234</p>
                </div>
              </div>
            </div>
            <div className="bg-purdue-black border border-purdue-gold p-4">
              <div className="flex items-center space-x-3">
                <Star className="w-8 h-8 text-purdue-gold" />
                <div>
                  <p className="text-sm text-purdue-gold opacity-80">Avg Rating</p>
                  <p className="text-xl font-bold text-purdue-gold">4.2</p>
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