import React, { useEffect, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import sound1 from '../sounds/sound1.mp3';
import sound2 from '../sounds/sound2.mp3';

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

  // Refs to hold the sound effects
  const soundEffect1 = useRef(null);
  const soundEffect2 = useRef(null);

  useEffect(() => {
    // Initialize the Audio objects only on the client-side
    soundEffect1.current = new Audio(sound1);
    soundEffect2.current = new Audio(sound2);

    // Function to play a random sound effect
    const playRandomSound = () => {
      const sounds = [soundEffect1.current, soundEffect2.current];
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      randomSound.play();
    };

    // Add event listeners to all input fields
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', playRandomSound);
    });

    // Clean up event listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('input', playRandomSound);
      });
    };
  }, []);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2, maxWidth: '800px', mx: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', textAlign: 'center' }}>
        coderesume.
      </Typography>

      <TextField
        label="Name"
        {...register('name')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        {...register('email')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        {...register('phone')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="LinkedIn"
        {...register('linkedin')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="GitHub"
        {...register('github')}
        fullWidth
        margin="normal"
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Education
      </Typography>
      {educationFields.map((item, index) => (
        <Grid container spacing={2} key={item.id} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Institution"
              {...register(`education.${index}.institution`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Location"
              {...register(`education.${index}.location`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Degree"
              {...register(`education.${index}.degree`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
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
        Experience
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
              label="Company"
              {...register(`experience.${index}.company`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Location"
              {...register(`experience.${index}.location`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              {...register(`experience.${index}.date`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Responsibilities"
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
        Projects
      </Typography>
      {projectsFields.map((item, index) => (
        <Grid container spacing={2} key={item.id} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              {...register(`projects.${index}.name`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Technologies"
              {...register(`projects.${index}.technologies`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              {...register(`projects.${index}.date`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Details"
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
        Technical Skills
      </Typography>
      <TextField
        label="Languages"
        {...register('skills.languages')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Frameworks"
        {...register('skills.frameworks')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Developer Tools"
        {...register('skills.tools')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Libraries"
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
