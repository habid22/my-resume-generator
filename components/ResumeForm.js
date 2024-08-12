import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

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
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2, maxWidth: '800px', mx: 'auto' }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          color: 'text.secondary', 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}
      >
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
        add education
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
        add experience
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
        add project
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
        generate resume
      </Button>
    </Box>
  );
};

export default ResumeForm;
