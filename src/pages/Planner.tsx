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
      <div className="bg-purdue-black border border-purdue-gold p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-purdue-gold">Academic Planner</h1>
            <p className="text-purdue-gold opacity-80 mt-2">Plan your semester-by-semester course schedule</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-purdue-black border border-purdue-gold text-purdue-gold hover:bg-purdue-medium transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Plan</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purdue-gold text-purdue-black hover:opacity-90 transition-colors">
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
          <div className="bg-purdue-black border border-purdue-gold p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-purdue-gold">Semester Planning</h2>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purdue-gold" />
                <select 
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="border border-purdue-gold bg-purdue-black text-purdue-gold px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purdue-gold"
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
          <div className="bg-purdue-black border border-purdue-gold p-6 mt-6">
            <h3 className="text-lg font-semibold text-purdue-gold mb-4">Planning Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purdue-black border border-purdue-gold p-4">
                <p className="text-sm text-purdue-gold font-medium opacity-80">Total Credits Planned</p>
                <p className="text-2xl font-bold text-purdue-gold">31</p>
              </div>
              <div className="bg-purdue-black border border-purdue-gold p-4">
                <p className="text-sm text-purdue-gold font-medium opacity-80">Remaining for Graduation</p>
                <p className="text-2xl font-bold text-purdue-gold">0</p>
              </div>
              <div className="bg-purdue-black border border-purdue-gold p-4">
                <p className="text-sm text-purdue-gold font-medium opacity-80">Expected Graduation</p>
                <p className="text-lg font-bold text-purdue-gold">Spring 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;