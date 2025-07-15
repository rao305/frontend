import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import TranscriptUpload from '../components/TranscriptUpload';
import TranscriptViewer from '../components/TranscriptViewer';

const Transcript: React.FC = () => {
  const [hasTranscript, setHasTranscript] = useState(true); // Set to true for demo
  
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-purdue-gold">Transcript Management</h1>
        <p className="text-purdue-gold opacity-80 mt-2">Upload and manage your academic transcript for degree planning</p>
      </div>

      {hasTranscript ? <TranscriptViewer /> : <TranscriptUpload onUpload={() => setHasTranscript(true)} />}
    </div>
  );
};

export default Transcript;