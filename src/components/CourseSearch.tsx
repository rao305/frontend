import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const CourseSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const suggestedCourses = [
    { code: 'CS 35200', title: 'Compilers', credits: 3, available: true },
    { code: 'CS 35300', title: 'Computer Graphics', credits: 3, available: true },
    { code: 'CS 35400', title: 'Operating Systems', credits: 3, available: false },
    { code: 'CS 42600', title: 'Computer Security', credits: 3, available: true },
    { code: 'STAT 35000', title: 'Introduction to Statistics', credits: 3, available: true },
  ];

  const filteredCourses = suggestedCourses.filter(course =>
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Courses</h3>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
        />
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Suggested Courses</h4>
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border transition-colors ${
              course.available 
                ? 'border-gray-200 hover:bg-gray-50 cursor-pointer' 
                : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-60'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 text-sm">{course.code}</h5>
                <p className="text-xs text-gray-600">{course.title}</p>
                <p className="text-xs text-gray-500">{course.credits} credits</p>
              </div>
              {course.available ? (
                <button className="text-yellow-600 hover:text-yellow-700">
                  <Plus className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-xs text-gray-400">Not available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSearch;