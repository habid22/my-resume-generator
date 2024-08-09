export const generateLatex = (data) => {
    const educationSection = data.education && Array.isArray(data.education) ? data.education.map(edu => `
      \\resumeSubheading
        {${edu.institution || ''}}{${edu.location || ''}}
        {${edu.degree || ''}}{${edu.date || ''}}
    `).join('') : '';
  
    const experienceSection = data.experience && Array.isArray(data.experience) ? data.experience.map(exp => `
      \\resumeSubheading
        {${exp.title || ''}}{${exp.date || ''}}
        {${exp.company || ''}}{${exp.location || ''}}
        \\resumeItemListStart
          ${(exp.responsibilities || '').split('\n').map(res => `\\resumeItem{${res.trim() || ''}}`).join('')}
        \\resumeItemListEnd
    `).join('') : '';
  
    const projectsSection = data.projects && Array.isArray(data.projects) ? data.projects.map(proj => `
        \\resumeProjectHeading
            {\\textbf{${proj.name || ''}} $|$ \\emph{${proj.technologies || ''}}}{${proj.date || ''}}
            \\resumeItemListStart
              ${(proj.details || '').split('\n').map(detail => `\\resumeItem{${detail.trim() || ''}}`).join('')}
            \\resumeItemListEnd
    `).join('') : '';
  
    const skillsSection = data.skills ? `
       \\textbf{Languages}: ${data.skills.languages ? data.skills.languages : ''} \\\\
       \\textbf{Frameworks}: ${data.skills.frameworks ? data.skills.frameworks : ''} \\\\
       \\textbf{Developer Tools}: ${data.skills.tools ? data.skills.tools : ''} \\\\
       \\textbf{Libraries}: ${data.skills.libraries ? data.skills.libraries : ''}
    ` : '';
  
    return `
  %-------------------------
  % Resume in Latex
  % Author : Jake Gutierrez
  % Based off of: https://github.com/sb2nov/resume
  % License : MIT
  %------------------------
  
  \\documentclass[letterpaper,11pt]{article}
  
  \\usepackage{latexsym}
  \\usepackage[empty]{fullpage}
  \\usepackage{titlesec}
  \\usepackage{marvosym}
  \\usepackage[usenames,dvipsnames]{color}
  \\usepackage{verbatim}
  \\usepackage{enumitem}
  \\usepackage[hidelinks]{hyperref}
  \\usepackage{fancyhdr}
  \\usepackage[english]{babel}
  \\usepackage{tabularx}
  \\input{glyphtounicode}
  
  
  \\pagestyle{fancy}
  \\fancyhf{} % clear all header and footer fields
  \\fancyfoot{}
  \\renewcommand{\\headrulewidth}{0pt}
  \\renewcommand{\\footrulewidth}{0pt}
  
  % Adjust margins
  \\addtolength{\\oddsidemargin}{-0.5in}
  \\addtolength{\\evensidemargin}{-0.5in}
  \\addtolength{\\textwidth}{1in}
  \\addtolength{\\topmargin}{-.5in}
  \\addtolength{\\textheight}{1.0in}
  
  \\urlstyle{same}
  
  \\raggedbottom
  \\raggedright
  \\setlength{\\tabcolsep}{0in}
  
  % Sections formatting
  \\titleformat{\\section}{
    \\vspace{-4pt}\\scshape\\raggedright\\large
  }{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]
  
  % Ensure that generate pdf is machine readable/ATS parsable
  \\pdfgentounicode=1
  
  %-------------------------
  % Custom commands
  \\newcommand{\\resumeItem}[1]{
    \\item\\small{
      {#1 \\vspace{-2pt}}
    }
  }
  
  \\newcommand{\\resumeSubheading}[4]{
    \\vspace{-2pt}\\item
      \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & #2 \\\\
        \\textit{\\small#3} & \\textit{\\small #4} \\\\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeSubSubheading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
        \\textit{\\small#1} & \\textit{\\small #2} \\\\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeProjectHeading}[2]{
      \\item
      \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
        \\small#1 & #2 \\\\
      \\end{tabular*}\\vspace{-7pt}
  }
  
  \\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}
  
  \\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
  
  \\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
  \\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
  \\newcommand{\\resumeItemListStart}{\\begin{itemize}}
  \\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}
  
  %-------------------------------------------
  %%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  
  \\begin{document}
  
  %----------HEADING----------
  \\begin{center}
      \\textbf{\\Huge \\scshape ${data.name || ''}} \\\\ \\vspace{1pt}
      \\small ${data.phone || ''} $|$ \\href{mailto:${data.email || ''}}{\\underline{${data.email || ''}}} $|$ 
      \\href{${data.linkedin || ''}}{\\underline{linkedin.com/in/${data.linkedin || ''}}} $|$
      \\href{${data.github || ''}}{\\underline{github.com/${data.github || ''}}}
  \\end{center}
  
  
  %-----------EDUCATION-----------
  \\section{Education}
    \\resumeSubHeadingListStart
      ${educationSection}
    \\resumeSubHeadingListEnd
  
  
  %-----------EXPERIENCE-----------
  \\section{Experience}
    \\resumeSubHeadingListStart
      ${experienceSection}
    \\resumeSubHeadingListEnd
  
  
  %-----------PROJECTS-----------
  \\section{Projects}
      \\resumeSubHeadingListStart
        ${projectsSection}
      \\resumeSubHeadingListEnd
  
  
  
  %-----------TECHNICAL SKILLS-----------
  \\section{Technical Skills}
   \\begin{itemize}[leftmargin=0.15in, label={}]
      \\small{\\item{
       ${skillsSection}
      }}
   \\end{itemize}
  
  
  %-------------------------------------------
  \\end{document}
    `;
  };
  