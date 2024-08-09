import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/400.css';  // Import Roboto font

const theme = createTheme({
  palette: {
    primary: {
      main: '#404258', // Dark Slate from previous palette
    },
    secondary: {
      main: '#50577A', // Slate Blue from previous palette
    },
    background: {
      default: '#1a1625', // Mixed - 100
      paper: '#2f2b3a', // Mixed - 200
    },
    text: {
      primary: '#ffffff', // White for contrast
      secondary: '#B0BEC5', // Light grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      color: '#ffffff', // White for titles
    },
    h5: {
      color: '#B0BEC5', // Light grey for subtitles
    },
    body1: {
      color: '#B0BEC5', // Light grey for body text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners
          backgroundColor: '#404258', // Use the primary color for buttons
          color: '#ffffff', // White text for buttons
          '&:hover': {
            backgroundColor: '#50577A', // Darker slate for hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#50577A', // Focused label color
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#50577A', // Focused underline color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#50577A', // Default border color
            },
            '&:hover fieldset': {
              borderColor: '#404258', // Hover border color
            },
            '&.Mui-focused fieldset': {
              borderColor: '#50577A', // Focused border color
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
