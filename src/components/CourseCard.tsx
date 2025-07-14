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
    if (!grade) return 'text-professional-medium';
    if (grade.startsWith('A')) return 'text-professional-black';
    if (grade.startsWith('B')) return 'text-professional-dark';
    if (grade.startsWith('C')) return 'text-professional-medium';
    return 'text-professional-light';
  };

  return (
    <div className="border border-gray-200 rounded-sm p-6 hover:bg-professional-lightest transition-all duration-200 bg-white shadow-professional hover:shadow-professional-lg">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-professional-black text-lg">{code}</h3>
          <p className="text-sm text-professional-medium mt-1">{title}</p>
        </div>
        {grade && (
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-professional-medium" />
            <span className={`font-semibold ${getGradeColor(grade)}`}>{grade}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-6 text-sm text-professional-medium mt-4">
        <div className="flex items-center space-x-1">
          <User className="w-4 h-4 text-professional-light" />
          <span>{instructor}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4 text-professional-light" />
          <span>{schedule}</span>
        </div>
        <span className="font-medium">{credits} credit{credits !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
};

export default CourseCard;