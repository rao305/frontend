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
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-100">Welcome back, John!</h1>
            <p className="text-gray-400 mt-1">Computer Science • Junior • Spring 2025</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-400">Current GPA</p>
              <p className="text-2xl font-bold text-yellow-600">3.72</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Credits Completed</p>
              <p className="text-2xl font-bold text-green-500">89/120</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Current Courses"
          value="5"
          change="+1 from last semester"
          icon={BookOpen}
          color="blue"
        />
        <StatCard
          title="Degree Progress"
          value="74%"
          change="On track for May 2026"
          icon={GraduationCap}
          color="green"
        />
        <StatCard
          title="Remaining Credits"
          value="31"
          change="3 semesters left"
          icon={Award}
          color="yellow"
        />
        <StatCard
          title="Next Registration"
          value="Mar 15"
          change="2 weeks away"
          icon={Calendar}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Courses */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-100">Current Courses</h2>
              <span className="text-sm text-gray-400">Spring 2025</span>
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
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-100 mb-4">Degree Progress</h2>
            <ProgressChart />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Assistant Widget */}
          <AIWidget />

          {/* Featured: Quick AI Questions */}
          <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-700/10 border border-yellow-600/30 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center shadow-md">
                <Bot className="w-5 h-5 text-gray-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100">Ask Boiler AI</h3>
                <p className="text-sm text-gray-400">Get instant academic guidance</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link
                to="/ai-assistant"
                className="block w-full text-left p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm text-gray-300 hover:text-gray-100 border border-gray-600 shadow-sm"
              >
                "What courses should I take next semester?"
              </Link>
              <Link
                to="/ai-assistant"
                className="block w-full text-left p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm text-gray-300 hover:text-gray-100 border border-gray-600 shadow-sm"
              >
                "How do I change my major to CS?"
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActions />

          {/* Upcoming Deadlines */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg shadow-sm">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-gray-100">CS 25100 Project</p>
                  <p className="text-xs text-gray-400">Due March 10</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-yellow-600/10 border border-yellow-600/30 rounded-lg shadow-sm">
                <Calendar className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="text-sm font-medium text-gray-100">Registration Opens</p>
                  <p className="text-xs text-gray-400">March 15</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg shadow-sm">
                <FileText className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-100">MATH 26600 Midterm</p>
                  <p className="text-xs text-gray-400">March 18</p>
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