import React, { useEffect, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import keyboard1 from '../sounds/keyboard1.mp3';
import keyboard2 from '../sounds/keyboard2.mp3';
import keyboard3 from '../sounds/keyboard3.mp3';
import keyboard4 from '../sounds/keyboard4.mp3';
import keyboard5 from '../sounds/keyboard5.mp3';

const ResumeForm = ({ onSubmit }) => {
  const { register, control, handleSubmit, watch } = useForm();
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

  // Refs to hold the sound effects
  const soundEffect1 = useRef(null);
  const soundEffect2 = useRef(null);
  const soundEffect3 = useRef(null);
  const soundEffect4 = useRef(null);
  const soundEffect5 = useRef(null);

  useEffect(() => {
    // Initialize the Audio objects only on the client-side
    soundEffect1.current = new Audio(keyboard1);
    soundEffect2.current = new Audio(keyboard2);
    soundEffect3.current = new Audio(keyboard3);
    soundEffect4.current = new Audio(keyboard4);
    soundEffect5.current = new Audio(keyboard5);

    // Function to play a random sound effect
    const playRandomSound = () => {
      const sounds = [soundEffect1.current, soundEffect2.current, soundEffect3.current, soundEffect4.current, soundEffect5.current];
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      randomSound.play();
    };

    // Function to attach event listeners to input fields
    const attachEventListeners = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        input.removeEventListener('input', playRandomSound); // Remove any existing listeners to avoid duplicates
        input.addEventListener('input', playRandomSound);
      });
    };

    // Attach event listeners initially
    attachEventListeners();

    // Watch for changes in the fields to reattach event listeners
    const subscription = watch(() => {
      attachEventListeners();
    });

    // Clean up event listeners on component unmount
    return () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        input.removeEventListener('input', playRandomSound);
      });
      subscription.unsubscribe(); // Unsubscribe from watching field changes
    };
  }, [watch]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2, maxWidth: '800px', mx: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', textAlign: 'center' }}>
        coderesume.
      </Typography>

      <TextField
        label="name"
        {...register('name')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="email"
        {...register('email')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="phone"
        {...register('phone')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="linkedIn"
        {...register('linkedin')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="github"
        {...register('github')}
        fullWidth
        margin="normal"
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        education
      </Typography>
      {educationFields.map((item, index) => (
        <Grid container spacing={2} key={item.id} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="institution"
              {...register(`education.${index}.institution`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="location"
              {...register(`education.${index}.location`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="degree"
              {...register(`education.${index}.degree`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="date"
              {...register(`education.${index}.date`)}
              fullWidth
            />
          </Grid>
        </Grid>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => appendEducation({})}
        sx={{ mb: 4 }}
      >
        Add Education
      </Button>

      <Typography variant="h5" gutterBottom>
        experience
      </Typography>
      {experienceFields.map((item, index) => (
        <Grid container spacing={2} key={item.id} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              {...register(`experience.${index}.title`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="company"
              {...register(`experience.${index}.company`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="location"
              {...register(`experience.${index}.location`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="date"
              {...register(`experience.${index}.date`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="responsibilities"
              {...register(`experience.${index}.responsibilities`)}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => appendExperience({})}
        sx={{ mb: 4 }}
      >
        Add Experience
      </Button>

      <Typography variant="h5" gutterBottom>
        projects
      </Typography>
      {projectsFields.map((item, index) => (
        <Grid container spacing={2} key={item.id} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="name"
              {...register(`projects.${index}.name`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="technologies"
              {...register(`projects.${index}.technologies`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="date"
              {...register(`projects.${index}.date`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="details"
              {...register(`projects.${index}.details`)}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => appendProjects({})}
        sx={{ mb: 4 }}
      >
        Add Project
      </Button>

      <Typography variant="h5" gutterBottom>
        technical skills
      </Typography>
      <TextField
        label="languages"
        {...register('skills.languages')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="frameworks"
        {...register('skills.frameworks')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="developer tools"
        {...register('skills.tools')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="libraries"
        {...register('skills.libraries')}
        fullWidth
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 4 }}
      >
        Generate Resume
      </Button>
    </Box>
  );
};

export default ResumeForm;
