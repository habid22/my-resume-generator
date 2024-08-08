// pages/api/generate.js
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { generateLatex } from '../../utils/latexTemplate';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    // Generate LaTeX code
    const latexCode = generateLatex(data);

    // Create the PDF document
    const doc = new PDFDocument();
    const pdfPath = path.join(process.cwd(), 'public', 'resume.pdf');
    const writeStream = fs.createWriteStream(pdfPath);

    doc.pipe(writeStream);
    doc.fontSize(20).text('Resume', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Name: ${data.name || ''}`);
    doc.text(`Email: ${data.email || ''}`);
    doc.text(`Phone: ${data.phone || ''}`);
    doc.text(`LinkedIn: ${data.linkedin || ''}`);
    doc.text(`GitHub: ${data.github || ''}`);
    doc.moveDown();
    doc.fontSize(16).text('Skills');
    doc.fontSize(12).text((data.skills && data.skills.languages) ? data.skills.languages : '');
    doc.moveDown();
    doc.fontSize(16).text('Experience');
    doc.fontSize(12).text((data.experience && Array.isArray(data.experience)) ? data.experience.map(exp => `${exp.title} at ${exp.company}`).join(', ') : '');
    doc.moveDown();
    doc.fontSize(16).text('Projects');
    doc.fontSize(12).text((data.projects && Array.isArray(data.projects)) ? data.projects.map(proj => proj.name).join(', ') : '');
    doc.moveDown();
    doc.fontSize(16).text('Education');
    doc.fontSize(12).text((data.education && Array.isArray(data.education)) ? data.education.map(edu => edu.institution).join(', ') : '');
    doc.end();

    writeStream.on('finish', () => {
      res.status(200).json({ message: 'PDF and LaTeX Generated', pdfUrl: '/resume.pdf', latexCode });
    });

    writeStream.on('error', (err) => {
      res.status(500).json({ message: 'Error generating PDF', error: err });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
