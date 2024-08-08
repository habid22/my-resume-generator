// components/ResumeForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const ResumeForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

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
      <div>
        <label>Skills:</label>
        <input {...register('skills')} />
      </div>
      <div>
        <label>Experience:</label>
        <textarea {...register('experience')} />
      </div>
      <div>
        <label>Projects:</label>
        <textarea {...register('projects')} />
      </div>
      <div>
        <label>Education:</label>
        <textarea {...register('education')} />
      </div>
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
