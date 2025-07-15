import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Award, 
  Clock,
  User,
  MessageCircle,
  FileText,
  GraduationCap,
  Bot
} from 'lucide-react';
import StatCard from '../components/StatCard';
import ProgressChart from '../components/ProgressChart';
import CourseCard from '../components/CourseCard';
import QuickActions from '../components/QuickActions';
import AIWidget from '../components/AIWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-purdue-black border border-purdue-gold p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-purdue-gold tracking-tight mb-2">Welcome back, John</h1>
            <p className="text-purdue-gold text-base opacity-80">Computer Science • Junior • Spring 2025</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-xs font-medium text-purdue-gold uppercase tracking-wide opacity-80">Current GPA</p>
              <p className="text-2xl font-light text-purdue-gold">3.72</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-purdue-gold uppercase tracking-wide opacity-80">Credits Completed</p>
              <p className="text-2xl font-light text-purdue-gold">89/120</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Current Courses"
          value="5"
          change="+1 from last semester"
          icon={BookOpen}
        />
        <StatCard
          title="Degree Progress"
          value="74%"
          change="On track for May 2026"
          icon={GraduationCap}
        />
        <StatCard
          title="Remaining Credits"
          value="31"
          change="3 semesters left"
          icon={Award}
        />
        <StatCard
          title="Next Registration"
          value="Mar 15"
          change="2 weeks away"
          icon={Calendar}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Courses */}
          <div className="bg-purdue-black border border-purdue-gold p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium text-purdue-gold">Current Courses</h2>
              <span className="text-xs font-medium text-purdue-gold uppercase tracking-wide opacity-80">Spring 2025</span>
            </div>
            <div className="space-y-4">
              <CourseCard
                code="CS 25000"
                title="Computer Architecture"
                instructor="Dr. Smith"
                credits={3}
                grade="A-"
                schedule="MWF 10:30-11:20"
              />
              <CourseCard
                code="CS 25100"
                title="Data Structures & Algorithms"
                instructor="Dr. Johnson"
                credits={3}
                grade="B+"
                schedule="TTh 12:00-1:15"
              />
              <CourseCard
                code="MATH 26600"
                title="Ordinary Differential Equations"
                instructor="Dr. Williams"
                credits={3}
                grade="A"
                schedule="MWF 1:30-2:20"
              />
              <CourseCard
                code="ENGL 10800"
                title="Accelerated Composition"
                instructor="Prof. Davis"
                credits={3}
                grade="A-"
                schedule="TTh 2:30-3:45"
              />
              <CourseCard
                code="CS 19300"
                title="Tools"
                instructor="Dr. Brown"
                credits={1}
                grade="A"
                schedule="W 4:30-5:20"
              />
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-purdue-black border border-purdue-gold p-8">
            <h2 className="text-2xl font-semibold text-purdue-gold mb-6">Degree Progress</h2>
            <ProgressChart />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* AI Assistant Widget */}
          <AIWidget />

          {/* Featured: Quick AI Questions */}
          <div className="bg-purdue-black border border-purdue-gold p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purdue-gold flex items-center justify-center">
                <Bot className="w-6 h-6 text-purdue-black" />
              </div>
              <div>
                <h3 className="font-semibold text-purdue-gold text-lg">Ask Boiler AI</h3>
                <p className="text-sm text-purdue-gold opacity-80">Get instant academic guidance</p>
              </div>
            </div>
            <div className="space-y-3">
              <Link
                to="/ai-assistant"
                className="block w-full text-left p-4 bg-purdue-black border border-purdue-gold hover:bg-purdue-medium transition-all duration-200 text-sm text-purdue-gold"
              >
                "What courses should I take next semester?"
              </Link>
              <Link
                to="/ai-assistant"
                className="block w-full text-left p-4 bg-purdue-black border border-purdue-gold hover:bg-purdue-medium transition-all duration-200 text-sm text-purdue-gold"
              >
                "How do I change my major to CS?"
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActions />

          {/* Upcoming Deadlines */}
          <div className="bg-purdue-black border border-purdue-gold p-6">
            <h3 className="text-lg font-semibold text-purdue-gold mb-6">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-purdue-black border border-purdue-gold">
                <Clock className="w-5 h-5 text-purdue-gold" />
                <div>
                  <p className="text-sm font-medium text-purdue-gold">CS 25100 Project</p>
                  <p className="text-xs text-purdue-gold opacity-80">Due March 10</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purdue-black border border-purdue-gold">
                <Calendar className="w-5 h-5 text-purdue-gold" />
                <div>
                  <p className="text-sm font-medium text-purdue-gold">Registration Opens</p>
                  <p className="text-xs text-purdue-gold opacity-80">March 15</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purdue-black border border-purdue-gold">
                <FileText className="w-5 h-5 text-purdue-gold" />
                <div>
                  <p className="text-sm font-medium text-purdue-gold">MATH 26600 Midterm</p>
                  <p className="text-xs text-purdue-gold opacity-80">March 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;