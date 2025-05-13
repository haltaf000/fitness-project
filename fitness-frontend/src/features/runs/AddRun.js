import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography, MenuItem } from '@mui/material';
import apiClient from '../../api/client';

const RUN_TYPES = [
  { value: 'MILE', label: 'One Mile Run' },
  { value: 'INTERVAL', label: 'Interval Training' },
  { value: 'LONG', label: 'Long Distance' },
];

export default function AddRun() {
  const [formData, setFormData] = useState({
    run_type: 'MILE',
    distance_km: '',
    duration_minutes: '',
    notes: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/runs/', formData);
      navigate('/dashboard');
    } catch (error) {
      alert('Failed to save run');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>Log New Run</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            select
            fullWidth
            label="Run Type"
            value={formData.run_type}
            onChange={(e) => setFormData({...formData, run_type: e.target.value})}
            sx={{ mb: 2 }}
          >
            {RUN_TYPES.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Distance (km)"
            type="number"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.distance_km}
            onChange={(e) => setFormData({...formData, distance_km: e.target.value})}
            required
          />

          <TextField
            label="Duration (minutes)"
            type="number"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.duration_minutes}
            onChange={(e) => setFormData({...formData, duration_minutes: e.target.value})}
            required
          />

          <TextField
            label="Notes"
            multiline
            rows={3}
            fullWidth
            sx={{ mb: 2 }}
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />

          <Button type="submit" variant="contained" fullWidth>
            Save Run
          </Button>
        </form>
      </Paper>
    </Container>
  );
}