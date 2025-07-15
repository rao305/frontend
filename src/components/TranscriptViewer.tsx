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
      <div className="bg-purdue-black border border-purdue-gold p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-purdue-gold" />
            <div>
              <h2 className="text-xl font-bold text-purdue-gold">Transcript Loaded</h2>
              <p className="text-purdue-gold opacity-80">Last updated: {transcriptData.lastUpdated}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-purdue-black border border-purdue-gold text-purdue-gold hover:bg-purdue-medium transition-colors">
              <Upload className="w-4 h-4" />
              <span>Upload New</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purdue-gold text-purdue-black hover:opacity-90 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purdue-black border border-purdue-gold p-4">
            <p className="text-sm text-purdue-gold font-medium opacity-80">Cumulative GPA</p>
            <p className="text-2xl font-bold text-purdue-gold">{transcriptData.gpa}</p>
          </div>
          <div className="bg-purdue-black border border-purdue-gold p-4">
            <p className="text-sm text-purdue-gold font-medium opacity-80">Total Credits</p>
            <p className="text-2xl font-bold text-purdue-gold">{transcriptData.totalCredits}</p>
          </div>
          <div className="bg-purdue-black border border-purdue-gold p-4">
            <p className="text-sm text-purdue-gold font-medium opacity-80">Terms Completed</p>
            <p className="text-2xl font-bold text-purdue-gold">{transcriptData.courses.length}</p>
          </div>
        </div>
      </div>

      {/* Course History */}
      <div className="space-y-4">
        {transcriptData.courses.map((term, index) => (
          <div key={index} className="bg-purdue-black border border-purdue-gold p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-purdue-gold" />
              <h3 className="text-lg font-semibold text-purdue-gold">{term.term}</h3>
              <span className="text-sm text-purdue-gold opacity-80">
                {term.courses.reduce((sum, course) => sum + course.credits, 0)} credits
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purdue-gold">
                    <th className="text-left py-2 text-sm font-medium text-purdue-gold opacity-80">Course</th>
                    <th className="text-left py-2 text-sm font-medium text-purdue-gold opacity-80">Title</th>
                    <th className="text-center py-2 text-sm font-medium text-purdue-gold opacity-80">Credits</th>
                    <th className="text-center py-2 text-sm font-medium text-purdue-gold opacity-80">Grade</th>
                    <th className="text-center py-2 text-sm font-medium text-purdue-gold opacity-80">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {term.courses.map((course, courseIndex) => (
                    <tr key={courseIndex} className="border-b border-purdue-gold border-opacity-30">
                      <td className="py-3 text-sm font-medium text-purdue-gold">{course.code}</td>
                      <td className="py-3 text-sm text-purdue-gold opacity-80">{course.title}</td>
                      <td className="py-3 text-sm text-purdue-gold opacity-80 text-center">{course.credits}</td>
                      <td className="py-3 text-sm font-medium text-center">
                        <span className="px-2 py-1 text-xs bg-purdue-gold text-purdue-black">
                          {course.grade}
                        </span>
                      </td>
                      <td className="py-3 text-sm text-purdue-gold opacity-80 text-center">{course.points}</td>
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