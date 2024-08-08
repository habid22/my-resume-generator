// pages/api/generate.js
import { generateLatex } from '../../utils/latexTemplate';
import PDFDocument from 'pdfkit';
import { promisify } from 'util';
import { pipeline } from 'stream';
import fs from 'fs';
import path from 'path';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    // Generate LaTeX code
    const latexCode = generateLatex(data);

    // Generate PDF
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(path.join(process.cwd(), 'public', 'resume.pdf'));
    doc.pipe(writeStream);
    doc.text(latexCode);
    doc.end();

    // Wait for the stream to finish
    const streamPipeline = promisify(pipeline);
    await streamPipeline(writeStream);

    res.status(200).json({ message: 'PDF Generated', url: '/resume.pdf' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
