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
    <div className="bg-purdue-black border border-purdue-gold p-6">
      <h3 className="text-lg font-semibold text-purdue-gold mb-4">Add Courses</h3>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purdue-gold w-4 h-4" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-purdue-gold bg-purdue-black text-purdue-gold focus:outline-none focus:ring-2 focus:ring-purdue-gold focus:border-transparent text-sm placeholder-purdue-gold placeholder-opacity-60"
        />
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-purdue-gold mb-2 opacity-80">Suggested Courses</h4>
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border transition-colors ${
              course.available 
                ? 'border-purdue-gold hover:bg-purdue-medium cursor-pointer' 
                : 'border-purdue-gold bg-purdue-medium cursor-not-allowed opacity-60'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h5 className="font-medium text-purdue-gold text-sm">{course.code}</h5>
                <p className="text-xs text-purdue-gold opacity-80">{course.title}</p>
                <p className="text-xs text-purdue-gold opacity-60">{course.credits} credits</p>
              </div>
              {course.available ? (
                <button className="text-purdue-gold hover:opacity-80">
                  <Plus className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-xs text-purdue-gold opacity-40">Not available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSearch;