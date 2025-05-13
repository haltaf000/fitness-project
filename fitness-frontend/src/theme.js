import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', 
    },
    secondary: {
      main: '#14b8a6', 
    },
    background: {
      default: '#f8fafc', 
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
            root: {
                paddingLeft: '16px !important',
                paddingRight: '16px !important',
                '@media (min-width: 600px)': {
                paddingLeft: '24px !important',
                paddingRight: '24px !important',
                }
            }
            }
        }
    },
  },
});



export default theme;