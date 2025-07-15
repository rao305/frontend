import React from 'react';
import { Star, Clock, Users, BookOpen, Plus } from 'lucide-react';

interface CourseListProps {
  searchTerm: string;
}

const CourseList: React.FC<CourseListProps> = ({ searchTerm }) => {
  const courses = [
    {
      id: '1',
      code: 'CS 35200',
      title: 'Compilers',
      description: 'Syntactic and semantic analysis, code generation, and optimization for programming languages.',
      credits: 3,
      instructor: 'Dr. Sarah Johnson',
      rating: 4.6,
      enrollment: '45/60',
      schedule: 'MWF 10:30-11:20',
      prerequisites: ['CS 25000', 'CS 25100'],
      offered: ['Fall', 'Spring']
    },
    {
      id: '2',
      code: 'CS 35300',
      title: 'Computer Graphics',
      description: 'Fundamental concepts of computer graphics including rendering, modeling, and animation.',
      credits: 3,
      instructor: 'Dr. Michael Chen',
      rating: 4.8,
      enrollment: '38/50',
      schedule: 'TTh 2:30-3:45',
      prerequisites: ['CS 25000', 'MATH 26100'],
      offered: ['Fall', 'Spring']
    },
    {
      id: '3',
      code: 'CS 42600',
      title: 'Computer Security',
      description: 'Principles of computer security including cryptography, network security, and system security.',
      credits: 3,
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.4,
      enrollment: '52/65',
      schedule: 'MWF 1:30-2:20',
      prerequisites: ['CS 25200', 'CS 30800'],
      offered: ['Spring']
    },
    {
      id: '4',
      code: 'STAT 35000',
      title: 'Introduction to Statistics',
      description: 'Basic statistical concepts including probability, hypothesis testing, and regression analysis.',
      credits: 3,
      instructor: 'Dr. David Kim',
      rating: 4.2,
      enrollment: '78/85',
      schedule: 'TTh 11:30-12:45',
      prerequisites: ['MATH 16200'],
      offered: ['Fall', 'Spring', 'Summer']
    },
    {
      id: '5',
      code: 'CS 35400',
      title: 'Operating Systems',
      description: 'Design and implementation of operating systems including processes, memory management, and file systems.',
      credits: 3,
      instructor: 'Dr. Robert Brown',
      rating: 4.5,
      enrollment: 'Waitlist',
      schedule: 'MWF 9:30-10:20',
      prerequisites: ['CS 25200'],
      offered: ['Fall']
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-4">
      {filteredCourses.map((course) => (
        <div key={course.id} className="bg-purdue-black border border-purdue-gold p-6 hover:bg-purdue-medium transition-all duration-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-bold text-purdue-gold">{course.code}</h3>
                <span className="bg-purdue-gold text-purdue-black text-sm px-2 py-1">
                  {course.credits} credits
                </span>
              </div>
              <h4 className="text-lg font-semibold text-purdue-gold mb-2">{course.title}</h4>
              <p className="text-purdue-gold opacity-80 mb-3">{course.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-purdue-gold opacity-80">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-purdue-gold" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-purdue-gold" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4 text-purdue-gold" />
                  <span>{course.enrollment}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right space-y-2">
              <div className="flex items-center space-x-1">
                {renderStars(course.rating)}
                <span className="text-sm font-medium text-purdue-gold ml-1">{course.rating}</span>
              </div>
              
              <button className="flex items-center space-x-2 bg-purdue-gold text-purdue-black px-4 py-2 hover:opacity-90 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add to Plan</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-purdue-gold">
            <div>
              <span className="text-sm text-purdue-gold opacity-60">Prerequisites: </span>
              <span className="text-sm text-purdue-gold opacity-80">
                {course.prerequisites.length > 0 ? course.prerequisites.join(', ') : 'None'}
              </span>
            </div>
            
            <div>
              <span className="text-sm text-purdue-gold opacity-60">Offered: </span>
              <span className="text-sm text-purdue-gold opacity-80">{course.offered.join(', ')}</span>
            </div>
          </div>
        </div>
      ))}
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-purdue-gold mx-auto mb-4 opacity-60" />
          <h3 className="text-lg font-medium text-purdue-gold mb-2">No courses found</h3>
          <p className="text-purdue-gold opacity-80">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default CourseList;