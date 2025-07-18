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
      <div className="bg-minimal-card border border-minimal-border p-6 rounded-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-minimal-text tracking-tight mb-2">Welcome back, John</h1>
            <p className="text-minimal-text text-base opacity-80">Computer Science • Junior • Spring 2025</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-xs font-medium text-minimal-text uppercase tracking-wide opacity-80">Current GPA</p>
              <p className="text-2xl font-light text-minimal-text">3.72</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-minimal-text uppercase tracking-wide opacity-80">Credits Completed</p>
              <p className="text-2xl font-light text-minimal-text">89/120</p>
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
          <div className="bg-subtle-card border border-subtle-border p-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium text-subtle-text">Current Courses</h2>
              <span className="text-xs font-medium text-subtle-text-secondary uppercase tracking-wide">Spring 2025</span>
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
          <div className="bg-subtle-card border border-subtle-border p-8 rounded-sm">
            <h2 className="text-2xl font-semibold text-subtle-text mb-6">Degree Progress</h2>
            <ProgressChart />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Assistant Widget */}
          <AIWidget />

          {/* Featured: Quick AI Questions */}
          <div className="bg-subtle-card border border-subtle-border p-6 rounded-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-subtle-hover border border-subtle-border flex items-center justify-center rounded-sm">
                <Bot className="w-6 h-6 text-subtle-text" />
              </div>
              <div>
                <h3 className="font-semibold text-subtle-text text-lg">Ask Boiler AI</h3>
                <p className="text-sm text-subtle-text-secondary">Get instant academic guidance</p>
              </div>
            </div>
            <div className="space-y-3">
              <button
                to="/ai-assistant"
                className="block w-full text-left p-4 bg-subtle-hover border border-subtle-border hover:bg-subtle-border transition-all duration-200 text-sm text-subtle-text rounded-sm"
              >
                "What courses should I take next semester?"
              </button>
              <button
                to="/ai-assistant"
                className="block w-full text-left p-4 bg-subtle-hover border border-subtle-border hover:bg-subtle-border transition-all duration-200 text-sm text-subtle-text rounded-sm"
              >
                "How do I change my major to CS?"
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActions />

          {/* Upcoming Deadlines */}
          <div className="bg-subtle-card border border-subtle-border p-6 rounded-sm">
            <h3 className="text-lg font-semibold text-subtle-text mb-6">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-subtle-hover border border-subtle-border rounded-sm">
                <Clock className="w-5 h-5 text-subtle-text" />
                <div>
                  <p className="text-sm font-medium text-subtle-text">CS 25100 Project</p>
                  <p className="text-xs text-subtle-text-secondary">Due March 10</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-subtle-hover border border-subtle-border rounded-sm">
                <Calendar className="w-5 h-5 text-subtle-text" />
                <div>
                  <p className="text-sm font-medium text-subtle-text">Registration Opens</p>
                  <p className="text-xs text-subtle-text-secondary">March 15</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-subtle-hover border border-subtle-border rounded-sm">
                <FileText className="w-5 h-5 text-subtle-text" />
                <div>
                  <p className="text-sm font-medium text-subtle-text">MATH 26600 Midterm</p>
                  <p className="text-xs text-subtle-text-secondary">March 18</p>
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