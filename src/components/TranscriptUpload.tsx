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
      <div className="bg-purdue-black border border-purdue-gold p-8">
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragging
              ? 'border-purdue-gold bg-purdue-medium'
              : 'border-purdue-gold hover:bg-purdue-medium'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isUploading ? (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purdue-gold rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 border-4 border-purdue-black border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purdue-gold">Processing Transcript</h3>
                <p className="text-purdue-gold opacity-80">Please wait while we parse your academic records...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purdue-gold rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-8 h-8 text-purdue-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purdue-gold">Upload Your Transcript</h3>
                <p className="text-purdue-gold opacity-80">
                  Drag and drop your PDF transcript here, or click to browse
                </p>
              </div>
              <button
                onClick={handleUpload}
                className="bg-purdue-gold text-purdue-black px-6 py-3 hover:opacity-90 transition-colors font-medium"
              >
                Choose File
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-purdue-black border border-purdue-gold p-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-6 h-6 text-purdue-gold mt-0.5" />
          <div>
            <h4 className="font-semibold text-purdue-gold mb-2">How to get your transcript:</h4>
            <ol className="text-sm text-purdue-gold opacity-80 space-y-1 list-decimal list-inside">
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
      <div className="bg-purdue-black border border-purdue-gold p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-6 h-6 text-purdue-gold mt-0.5" />
          <div>
            <h4 className="font-semibold text-purdue-gold mb-2">Privacy & Security</h4>
            <p className="text-sm text-purdue-gold opacity-80">
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