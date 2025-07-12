import React, { useState } from 'react';
import { Calendar, Plus, Save, Download } from 'lucide-react';
import SemesterPlanner from '../components/SemesterPlanner';
import CourseSearch from '../components/CourseSearch';

const Planner: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('Fall 2025');
  
  const semesters = [
    'Fall 2025',
    'Spring 2026',
    'Fall 2026',
    'Spring 2027'
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Academic Planner</h1>
            <p className="text-gray-600 mt-2">Plan your semester-by-semester course schedule</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Plan</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors">
              <Save className="w-4 h-4" />
              <span>Save Plan</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Course Search */}
        <div className="lg:col-span-1">
          <CourseSearch />
        </div>

        {/* Semester Planning Grid */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Semester Planning</h2>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <select 
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  {semesters.map(semester => (
                    <option key={semester} value={semester}>{semester}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {semesters.map(semester => (
                <SemesterPlanner key={semester} semester={semester} />
              ))}
            </div>
          </div>

          {/* Planning Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-600 font-medium">Total Credits Planned</p>
                <p className="text-2xl font-bold text-green-700">31</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Remaining for Graduation</p>
                <p className="text-2xl font-bold text-blue-700">0</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-600 font-medium">Expected Graduation</p>
                <p className="text-lg font-bold text-yellow-700">Spring 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;