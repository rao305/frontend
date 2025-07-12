import React from 'react';
import { Sliders } from 'lucide-react';

const CourseFilters: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Sliders className="w-5 h-5 text-gray-500" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option value="">All Departments</option>
            <option value="CS">Computer Science</option>
            <option value="MATH">Mathematics</option>
            <option value="STAT">Statistics</option>
            <option value="PHYS">Physics</option>
            <option value="ENGL">English</option>
          </select>
        </div>

        {/* Credits */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Credits</label>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map(credit => (
              <label key={credit} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                <span className="ml-2 text-sm text-gray-600">{credit} credit{credit !== 1 ? 's' : ''}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Level</label>
          <div className="space-y-2">
            {['100-199', '200-299', '300-399', '400-499', '500+'].map(level => (
              <label key={level} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                <span className="ml-2 text-sm text-gray-600">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Semester */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Offered In</label>
          <div className="space-y-2">
            {['Fall', 'Spring', 'Summer'].map(semester => (
              <label key={semester} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                <span className="ml-2 text-sm text-gray-600">{semester}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Instructor Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Min Instructor Rating</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option value="">Any Rating</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
            <option value="3.0">3.0+ Stars</option>
          </select>
        </div>

        {/* Clear Filters */}
        <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default CourseFilters;