import { useState } from 'react';
import ResumeForm from '../components/ResumeForm';

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [latexCode, setLatexCode] = useState('');

  const handleFormSubmit = async (data) => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setPdfUrl(result.pdfUrl);
    setLatexCode(result.latexCode);
  };

  return (
    <div>
      <h1>Resume Generator</h1>
      <ResumeForm onSubmit={handleFormSubmit} />
      {pdfUrl && <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>}
      {latexCode && (
        <div>
          <h2>LaTeX Code</h2>
          <textarea rows="20" cols="80" readOnly value={latexCode} />
        </div>
      )}
    </div>
  );
}
