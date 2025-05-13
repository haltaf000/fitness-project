import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import apiClient from '../../api/client';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    height: '',
    birth_date: ''
  });
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/users/register/', formData);
      navigate('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            label="Height (cm)"
            name="height"
            type="number"
            fullWidth
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            label="Birth Date"
            name="birth_date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}