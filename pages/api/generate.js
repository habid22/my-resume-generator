import { generateLatex } from '../../utils/latexTemplate';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    // Generate LaTeX code
    const latexCode = generateLatex(data);

    // Return the generated LaTeX code in the response
    res.status(200).json({ message: 'LaTeX Code Generated', latexCode });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
