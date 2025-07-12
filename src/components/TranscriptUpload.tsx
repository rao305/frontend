import React, { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

interface TranscriptUploadProps {
  onUpload: () => void;
}

const TranscriptUpload: React.FC<TranscriptUploadProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleUpload();
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      onUpload();
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragging
              ? 'border-yellow-400 bg-yellow-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isUploading ? (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Processing Transcript</h3>
                <p className="text-gray-600">Please wait while we parse your academic records...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Upload Your Transcript</h3>
                <p className="text-gray-600">
                  Drag and drop your PDF transcript here, or click to browse
                </p>
              </div>
              <button
                onClick={handleUpload}
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
              >
                Choose File
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-6 h-6 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">How to get your transcript:</h4>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Log into your student portal (myPurdue)</li>
              <li>Navigate to Student Records → Transcripts</li>
              <li>Request an unofficial transcript</li>
              <li>Download the PDF file</li>
              <li>Upload it here for automatic parsing</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-6 h-6 text-green-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-green-900 mb-2">Privacy & Security</h4>
            <p className="text-sm text-green-800">
              Your transcript data is encrypted and stored securely. We're fully FERPA compliant 
              and never share your academic information with third parties. You can delete your 
              data at any time from the Settings page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptUpload;