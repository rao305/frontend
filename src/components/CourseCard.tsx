import React from 'react';
import { Clock, User, Award } from 'lucide-react';

interface CourseCardProps {
  code: string;
  title: string;
  instructor: string;
  credits: number;
  grade?: string;
  schedule: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  code, 
  title, 
  instructor, 
  credits, 
  grade, 
  schedule 
}) => {
  const getGradeColor = (grade?: string) => {
    if (!grade) return 'text-gray-500';
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors bg-gray-800/50">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-white">{code}</h3>
          <p className="text-sm text-gray-300">{title}</p>
        </div>
        {grade && (
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-gray-500" />
            <span className={`font-semibold ${getGradeColor(grade)}`}>{grade}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4 text-sm text-gray-400">
        <div className="flex items-center space-x-1">
          <User className="w-4 h-4" />
          <span>{instructor}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{schedule}</span>
        </div>
        <span>{credits} credit{credits !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
};

export default CourseCard;