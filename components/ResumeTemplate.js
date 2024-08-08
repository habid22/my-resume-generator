// components/ResumeTemplate.js
import React from 'react';

const ResumeTemplate = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone}</p>
      <p>LinkedIn: {data.linkedin}</p>
      <p>GitHub: {data.github}</p>
      <h2>Skills</h2>
      <p>{data.skills}</p>
      <h2>Experience</h2>
      <p>{data.experience}</p>
      <h2>Projects</h2>
      <p>{data.projects}</p>
      <h2>Education</h2>
      <p>{data.education}</p>
    </div>
  );
};

export default ResumeTemplate;
