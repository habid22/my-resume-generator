// utils/latexTemplate.js
export const generateLatex = (data) => {
    return `
      \\documentclass{article}
      \\begin{document}
      \\title{Resume}
      \\author{${data.name}}
      \\maketitle
      \\section*{Contact Information}
      Email: ${data.email} \\\\
      Phone: ${data.phone} \\\\
      LinkedIn: ${data.linkedin} \\\\
      GitHub: ${data.github}
      \\section*{Skills}
      ${data.skills}
      \\section*{Experience}
      ${data.experience}
      \\section*{Projects}
      ${data.projects}
      \\section*{Education}
      ${data.education}
      \\end{document}
    `;
  };
  