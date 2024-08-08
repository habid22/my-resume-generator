import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const ResumeForm = ({ onSubmit }) => {
  const { register, control, handleSubmit } = useForm();
  const { fields: educationFields, append: appendEducation } = useFieldArray({
    control,
    name: "education",
  });
  const { fields: experienceFields, append: appendExperience } = useFieldArray({
    control,
    name: "experience",
  });
  const { fields: projectsFields, append: appendProjects } = useFieldArray({
    control,
    name: "projects",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name')} />
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email')} />
      </div>
      <div>
        <label>Phone:</label>
        <input {...register('phone')} />
      </div>
      <div>
        <label>LinkedIn:</label>
        <input {...register('linkedin')} />
      </div>
      <div>
        <label>GitHub:</label>
        <input {...register('github')} />
      </div>

      <h3>Education</h3>
      {educationFields.map((item, index) => (
        <div key={item.id}>
          <label>Institution:</label>
          <input {...register(`education.${index}.institution`)} />
          <label>Location:</label>
          <input {...register(`education.${index}.location`)} />
          <label>Degree:</label>
          <input {...register(`education.${index}.degree`)} />
          <label>Date:</label>
          <input {...register(`education.${index}.date`)} />
        </div>
      ))}
      <button type="button" onClick={() => appendEducation({})}>Add Education</button>

      <h3>Experience</h3>
      {experienceFields.map((item, index) => (
        <div key={item.id}>
          <label>Title:</label>
          <input {...register(`experience.${index}.title`)} />
          <label>Company:</label>
          <input {...register(`experience.${index}.company`)} />
          <label>Location:</label>
          <input {...register(`experience.${index}.location`)} />
          <label>Date:</label>
          <input {...register(`experience.${index}.date`)} />
          <label>Responsibilities:</label>
          <textarea {...register(`experience.${index}.responsibilities`)} />
        </div>
      ))}
      <button type="button" onClick={() => appendExperience({})}>Add Experience</button>

      <h3>Projects</h3>
      {projectsFields.map((item, index) => (
        <div key={item.id}>
          <label>Name:</label>
          <input {...register(`projects.${index}.name`)} />
          <label>Technologies:</label>
          <input {...register(`projects.${index}.technologies`)} />
          <label>Date:</label>
          <input {...register(`projects.${index}.date`)} />
          <label>Details:</label>
          <textarea {...register(`projects.${index}.details`)} />
        </div>
      ))}
      <button type="button" onClick={() => appendProjects({})}>Add Project</button>

      <h3>Technical Skills</h3>
      <div>
        <label>Languages:</label>
        <input {...register('skills.languages')} />
      </div>
      <div>
        <label>Frameworks:</label>
        <input {...register('skills.frameworks')} />
      </div>
      <div>
        <label>Developer Tools:</label>
        <input {...register('skills.tools')} />
      </div>
      <div>
        <label>Libraries:</label>
        <input {...register('skills.libraries')} />
      </div>

      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
