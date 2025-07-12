import React, { useState } from 'react';
import { Plus, X, Clock, Users } from 'lucide-react';

interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  instructor?: string;
  time?: string;
}

interface SemesterPlannerProps {
  semester: string;
}

const SemesterPlanner: React.FC<SemesterPlannerProps> = ({ semester }) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      code: 'CS 25200',
      title: 'Systems Programming',
      credits: 3,
      instructor: 'Dr. Smith',
      time: 'MWF 10:30-11:20'
    },
    {
      id: '2',
      code: 'CS 30800',
      title: 'Elementary Data Structures',
      credits: 3,
      instructor: 'Dr. Johnson',
      time: 'TTh 2:30-3:45'
    }
  ]);

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  const removeCourse = (courseId: string) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  const getSemesterColor = (semester: string) => {
    if (semester.includes('Fall')) return 'border-orange-200 bg-orange-50';
    if (semester.includes('Spring')) return 'border-green-200 bg-green-50';
    if (semester.includes('Summer')) return 'border-yellow-200 bg-yellow-50';
    return 'border-gray-200 bg-gray-50';
  };

  return (
    <div className={`border-2 border-dashed rounded-lg p-4 min-h-[300px] ${getSemesterColor(semester)}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">{semester}</h3>
        <span className="text-sm font-medium text-gray-600">{totalCredits} credits</span>
      </div>

      <div className="space-y-3 mb-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{course.code}</h4>
                <p className="text-sm text-gray-600">{course.title}</p>
                {course.instructor && (
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{course.instructor}</span>
                    </div>
                    {course.time && (
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{course.time}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">{course.credits}cr</span>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-3 text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center space-x-2">
        <Plus className="w-4 h-4" />
        <span>Add Course</span>
      </button>
    </div>
  );
};

export default SemesterPlanner;