import { useState } from 'react';
import { Container, Typography, Box, Button, TextareaAutosize } from '@mui/material';
import ResumeForm from '../components/ResumeForm';

export default function Home() {
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
    setLatexCode(result.latexCode);
  };

  const handleCopyLatexCode = () => {
    navigator.clipboard.writeText(latexCode)
      .then(() => {
        alert('LaTeX code copied to clipboard!');
      })
      .catch(err => {
        alert('Failed to copy text: ', err);
      });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <ResumeForm onSubmit={handleFormSubmit} />
      {latexCode && (
        <Box sx={{ mt: 4, position: 'relative' }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'text.primary' }}>
            latex code
          </Typography>
          <TextareaAutosize
            minRows={4} // Set to a smaller number for a smaller initial height
            maxRows={8} // Limit the maximum rows visible before scrolling
            style={{
              width: '100%',
              backgroundColor: '#b0ccdc', // Background color
              color: '#8094ac', // Text color
              border: '1px solid #8094ac', // Border color
              padding: '10px',
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '14px',
              maxHeight: '200px', // Limit the height to 200px to enforce scrolling
              overflow: 'auto', // Enable scrolling when content exceeds the max height
              resize: 'vertical', // Allow the user to resize the text area vertically if needed
            }}
            value={latexCode}
            readOnly
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCopyLatexCode}
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(0%, -50%)', 
              mt: 2,
              boxShadow: 'none', // Remove the shadow
              border: '1px solid #85a5bb', // Add the border color
            }}
          >
            Copy LaTeX Code
          </Button>
        </Box>
      )}
    </Container>
  );
}
