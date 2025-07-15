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
    if (!grade) return 'text-minimal-text opacity-60';
    return 'text-minimal-text';
  };

  return (
    <div className="border border-minimal-border p-4 hover:bg-minimal-hover transition-all duration-200 bg-minimal-card rounded-sm">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-medium text-minimal-text text-base">{code}</h3>
          <p className="text-sm text-minimal-text opacity-80 mt-1">{title}</p>
        </div>
        {grade && (
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-minimal-text" />
            <span className={`font-semibold ${getGradeColor(grade)}`}>{grade}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4 text-sm text-minimal-text opacity-80 mt-3">
        <div className="flex items-center space-x-1">
          <User className="w-3 h-3 text-minimal-text" />
          <span>{instructor}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-3 h-3 text-minimal-text" />
          <span>{schedule}</span>
        </div>
        <span className="font-medium text-minimal-text">{credits} credit{credits !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
};

export default CourseCard;