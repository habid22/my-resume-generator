// pages/index.js
import { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumeTemplate from '../components/ResumeTemplate';

export default function Home() {
  const [resumeData, setResumeData] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleFormSubmit = async (data) => {
    setResumeData(data);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setPdfUrl(result.url);
  };

  return (
    <div>
      <h1>Resume Generator</h1>
      <ResumeForm onSubmit={handleFormSubmit} />
      {resumeData && <ResumeTemplate data={resumeData} />}
      {pdfUrl && <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>}
    </div>
  );
}
