import React from 'react';
import { Download, Upload, CheckCircle, Calendar } from 'lucide-react';

const TranscriptViewer: React.FC = () => {
  const transcriptData = {
    lastUpdated: '2024-12-01',
    totalCredits: 89,
    gpa: 3.72,
    courses: [
      {
        term: 'Fall 2024',
        courses: [
          { code: 'CS 24000', title: 'Programming in C', credits: 3, grade: 'A-', points: 11.1 },
          { code: 'CS 25000', title: 'Computer Architecture', credits: 3, grade: 'A-', points: 11.1 },
          { code: 'MATH 26100', title: 'Multivariate Calculus', credits: 4, grade: 'B+', points: 13.2 },
          { code: 'PHYS 17200', title: 'Modern Mechanics', credits: 4, grade: 'B', points: 12.0 },
        ]
      },
      {
        term: 'Spring 2024',
        courses: [
          { code: 'CS 18000', title: 'Problem Solving/OOP', credits: 3, grade: 'A', points: 12.0 },
          { code: 'CS 19300', title: 'Tools', credits: 1, grade: 'A', points: 4.0 },
          { code: 'MATH 16200', title: 'Plane Analytic Geometry', credits: 5, grade: 'A-', points: 18.5 },
          { code: 'ENGL 10600', title: 'First-Year Composition', credits: 4, grade: 'A-', points: 14.8 },
          { code: 'COM 11400', title: 'Fundamentals of Speech', credits: 3, grade: 'B+', points: 9.9 },
        ]
      },
      {
        term: 'Fall 2023',
        courses: [
          { code: 'CS 15900', title: 'C Programming', credits: 3, grade: 'A', points: 12.0 },
          { code: 'MATH 16100', title: 'Plane Analytic Geometry', credits: 5, grade: 'B+', points: 16.5 },
          { code: 'CHM 11500', title: 'General Chemistry', credits: 4, grade: 'B', points: 12.0 },
          { code: 'SCLA 10100', title: 'Learning in Community', credits: 3, grade: 'A', points: 12.0 },
        ]
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Transcript Loaded</h2>
              <p className="text-gray-600">Last updated: {transcriptData.lastUpdated}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Upload New</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600 font-medium">Cumulative GPA</p>
            <p className="text-2xl font-bold text-blue-700">{transcriptData.gpa}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600 font-medium">Total Credits</p>
            <p className="text-2xl font-bold text-green-700">{transcriptData.totalCredits}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-600 font-medium">Terms Completed</p>
            <p className="text-2xl font-bold text-purple-700">{transcriptData.courses.length}</p>
          </div>
        </div>
      </div>

      {/* Course History */}
      <div className="space-y-4">
        {transcriptData.courses.map((term, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">{term.term}</h3>
              <span className="text-sm text-gray-500">
                {term.courses.reduce((sum, course) => sum + course.credits, 0)} credits
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Course</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Title</th>
                    <th className="text-center py-2 text-sm font-medium text-gray-600">Credits</th>
                    <th className="text-center py-2 text-sm font-medium text-gray-600">Grade</th>
                    <th className="text-center py-2 text-sm font-medium text-gray-600">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {term.courses.map((course, courseIndex) => (
                    <tr key={courseIndex} className="border-b border-gray-100">
                      <td className="py-3 text-sm font-medium text-gray-900">{course.code}</td>
                      <td className="py-3 text-sm text-gray-700">{course.title}</td>
                      <td className="py-3 text-sm text-gray-700 text-center">{course.credits}</td>
                      <td className="py-3 text-sm font-medium text-center">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                          course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                          course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.grade}
                        </span>
                      </td>
                      <td className="py-3 text-sm text-gray-700 text-center">{course.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranscriptViewer;