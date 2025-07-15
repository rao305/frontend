import React from 'react';
import { Sliders } from 'lucide-react';

const CourseFilters: React.FC = () => {
  return (
    <div className="bg-purdue-black border border-purdue-gold p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Sliders className="w-5 h-5 text-purdue-gold" />
        <h3 className="text-lg font-semibold text-purdue-gold">Filters</h3>
      </div>

      <div className="space-y-6">
        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-purdue-gold mb-2">Department</label>
          <select className="w-full border border-purdue-gold bg-purdue-black text-purdue-gold px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purdue-gold">
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
          <label className="block text-sm font-medium text-purdue-gold mb-2">Credits</label>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map(credit => (
              <label key={credit} className="flex items-center">
                <input type="checkbox" className="rounded border-purdue-gold text-purdue-gold focus:ring-purdue-gold bg-purdue-black" />
                <span className="ml-2 text-sm text-purdue-gold opacity-80">{credit} credit{credit !== 1 ? 's' : ''}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-purdue-gold mb-2">Course Level</label>
          <div className="space-y-2">
            {['100-199', '200-299', '300-399', '400-499', '500+'].map(level => (
              <label key={level} className="flex items-center">
                <input type="checkbox" className="rounded border-purdue-gold text-purdue-gold focus:ring-purdue-gold bg-purdue-black" />
                <span className="ml-2 text-sm text-purdue-gold opacity-80">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Semester */}
        <div>
          <label className="block text-sm font-medium text-purdue-gold mb-2">Offered In</label>
          <div className="space-y-2">
            {['Fall', 'Spring', 'Summer'].map(semester => (
              <label key={semester} className="flex items-center">
                <input type="checkbox" className="rounded border-purdue-gold text-purdue-gold focus:ring-purdue-gold bg-purdue-black" />
                <span className="ml-2 text-sm text-purdue-gold opacity-80">{semester}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Instructor Rating */}
        <div>
          <label className="block text-sm font-medium text-purdue-gold mb-2">Min Instructor Rating</label>
          <select className="w-full border border-purdue-gold bg-purdue-black text-purdue-gold px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purdue-gold">
            <option value="">Any Rating</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
            <option value="3.0">3.0+ Stars</option>
          </select>
        </div>

        {/* Clear Filters */}
        <button className="w-full bg-purdue-black border border-purdue-gold text-purdue-gold py-2 hover:bg-purdue-medium transition-colors">
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default CourseFilters;