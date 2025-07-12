import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface RequirementsListProps {
  title: string;
  type: 'core' | 'math' | 'general' | 'electives';
}

const RequirementsList: React.FC<RequirementsListProps> = ({ title, type }) => {
  const getRequirements = (type: string) => {
    switch (type) {
      case 'core':
        return [
          { code: 'CS 15900', title: 'C Programming', status: 'complete', grade: 'A' },
          { code: 'CS 18000', title: 'Problem Solving/OOP', status: 'complete', grade: 'A' },
          { code: 'CS 24000', title: 'Programming in C', status: 'complete', grade: 'A-' },
          { code: 'CS 25000', title: 'Computer Architecture', status: 'current', grade: null },
          { code: 'CS 25100', title: 'Data Structures', status: 'current', grade: null },
          { code: 'CS 25200', title: 'Systems Programming', status: 'planned', grade: null },
          { code: 'CS 30800', title: 'Elementary Data Structures', status: 'pending', grade: null },
          { code: 'CS 35200', title: 'Compilers', status: 'pending', grade: null },
        ];
      case 'math':
        return [
          { code: 'MATH 16100', title: 'Plane Analytic Geometry', status: 'complete', grade: 'B+' },
          { code: 'MATH 16200', title: 'Plane Analytic Geometry', status: 'complete', grade: 'A-' },
          { code: 'MATH 26100', title: 'Multivariate Calculus', status: 'complete', grade: 'B+' },
          { code: 'MATH 26600', title: 'Ordinary Differential Equations', status: 'current', grade: null },
          { code: 'STAT 35000', title: 'Introduction to Statistics', status: 'planned', grade: null },
        ];
      case 'general':
        return [
          { code: 'ENGL 10600', title: 'First-Year Composition', status: 'complete', grade: 'A-' },
          { code: 'COM 11400', title: 'Fundamentals of Speech', status: 'complete', grade: 'B+' },
          { code: 'CHM 11500', title: 'General Chemistry', status: 'complete', grade: 'B' },
          { code: 'PHYS 17200', title: 'Modern Mechanics', status: 'complete', grade: 'B' },
          { code: 'SCLA 10100', title: 'Learning in Community', status: 'complete', grade: 'A' },
        ];
      case 'electives':
        return [
          { code: 'CS 19300', title: 'Tools', status: 'complete', grade: 'A' },
          { code: 'CS 35300', title: 'Computer Graphics', status: 'planned', grade: null },
          { code: 'CS 35400', title: 'Operating Systems', status: 'pending', grade: null },
          { code: 'CS 42600', title: 'Computer Security', status: 'pending', grade: null },
        ];
      default:
        return [];
    }
  };

  const requirements = getRequirements(type);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'current':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'planned':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getGradeColor = (grade: string | null) => {
    if (!grade) return 'text-gray-400';
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      
      <div className="space-y-3">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              {getStatusIcon(req.status)}
              <div>
                <p className="font-medium text-gray-900">{req.code}</p>
                <p className="text-sm text-gray-600">{req.title}</p>
              </div>
            </div>
            
            <div className="text-right">
              {req.grade ? (
                <span className={`font-semibold ${getGradeColor(req.grade)}`}>
                  {req.grade}
                </span>
              ) : (
                <span className="text-sm text-gray-500 capitalize">
                  {req.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementsList;