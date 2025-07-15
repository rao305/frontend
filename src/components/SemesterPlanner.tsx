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
    return 'border-purdue-gold bg-purdue-black';
  };

  return (
    <div className={`border-2 border-dashed rounded-lg p-4 min-h-[300px] ${getSemesterColor(semester)}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-purdue-gold">{semester}</h3>
        <span className="text-sm font-medium text-purdue-gold opacity-80">{totalCredits} credits</span>
      </div>

      <div className="space-y-3 mb-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-purdue-black border border-purdue-gold p-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-purdue-gold">{course.code}</h4>
                <p className="text-sm text-purdue-gold opacity-80">{course.title}</p>
                {course.instructor && (
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-purdue-gold" />
                      <span className="text-xs text-purdue-gold opacity-60">{course.instructor}</span>
                    </div>
                    {course.time && (
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-purdue-gold" />
                        <span className="text-xs text-purdue-gold opacity-60">{course.time}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-purdue-gold">{course.credits}cr</span>
                <button
                  onClick={() => removeCourse(course.id)}
                  className="text-purdue-gold hover:opacity-60 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full border-2 border-dashed border-purdue-gold p-3 text-purdue-gold hover:bg-purdue-medium transition-colors flex items-center justify-center space-x-2">
        <Plus className="w-4 h-4" />
        <span>Add Course</span>
      </button>
    </div>
  );
};

export default SemesterPlanner;