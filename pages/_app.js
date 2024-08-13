import { AppBar, Toolbar, Typography } from '@mui/material';
import { Description as ResumeIcon } from '@mui/icons-material'; // Import the resume-like icon
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'; // Import Head for including the favicon and other meta tags
import '@fontsource/roboto-mono/400.css';  // Import Roboto Mono font

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono, monospace',  // Set Roboto Mono as the default font
  },
  palette: {
    primary: {
      main: '#85a5bb', // Use the secondary color as the primary theme color
    },
    secondary: {
      main: '#85a5bb', // Same as primary for consistency
    },
    background: {
      default: '#b0ccdc', // Set the background color
      paper: '#ffffff', // Use white for cards and other paper elements for contrast
    },
    text: {
      primary: '#85a5bb', // Primary color for text
      secondary: '#85a5bb', // Secondary color for text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#afcadc',
          color: '#85a5bb',
          '&:hover': {
            backgroundColor: '#afcadc', // Maintain same color on hover
          },
          borderColor: '#85a5bb', // Adding border color for buttons
          boxShadow: 'none', // Removing button shadow
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#85a5bb', // Use the secondary color for focused labels
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#85a5bb', // Use the secondary color for underline after focus
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#85a5bb', // Default border color
            },
            '&:hover fieldset': {
              borderColor: '#748ca1', // Darken slightly on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#85a5bb', // Focused border color
            },
          },
        },
      },
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>coderesume</title>
      </Head>
      <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4 }}>
        <Toolbar>
          <ResumeIcon sx={{ mr: 0.5, color: theme.palette.text.primary }} />
          <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
            coderesume
          </Typography>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
