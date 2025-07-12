import React from 'react';
import { GraduationCap, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import DegreeProgress from '../components/DegreeProgress';
import RequirementsList from '../components/RequirementsList';

const DegreeAudit: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Degree Audit</h1>
            <p className="text-gray-600 mt-2">Computer Science, Bachelor of Science</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Overall Progress</p>
              <p className="text-3xl font-bold text-green-600">74%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Expected Graduation</p>
              <p className="text-xl font-semibold text-gray-900">May 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <DegreeProgress />

      {/* Requirements Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RequirementsList 
          title="Core CS Requirements"
          type="core"
        />
        <RequirementsList 
          title="Mathematics Requirements"
          type="math"
        />
        <RequirementsList 
          title="General Education"
          type="general"
        />
        <RequirementsList 
          title="Technical Electives"
          type="electives"
        />
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Action Items</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Missing Prerequisites</h3>
              <p className="text-sm text-gray-600">Complete CS 25000 before enrolling in CS 35200</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Plan Ahead</h3>
              <p className="text-sm text-gray-600">Register for CS 35200 and CS 30800 for Fall 2025</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-gray-900">On Track</h3>
              <p className="text-sm text-gray-600">Core CS requirements are progressing well</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreeAudit;