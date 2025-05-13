import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={10}>
        <Typography variant="h2" gutterBottom>
          Welcome to Fitness Tracker
        </Typography>
        <Typography variant="h5" paragraph>
          Track your runs, monitor your weight, and achieve your fitness goals
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/login"
            sx={{ mr: 2 }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/register"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}