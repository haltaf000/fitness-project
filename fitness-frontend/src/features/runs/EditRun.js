import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { TextField, Button, Container, Paper, Typography, MenuItem, CircularProgress } from '@mui/material';
import apiClient from '../../api/client';
import toast from 'react-hot-toast';

const RUN_TYPES = [
  { value: 'MILE', label: 'One Mile Run' },
  { value: 'INTERVAL', label: 'Interval Training' },
  { value: 'LONG', label: 'Long Distance' },
];

export default function EditRun() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  const { data: run, isLoading } = useQuery({
    queryKey: ['run', id],
    queryFn: () => apiClient.get(`/runs/${id}/`).then(res => res.data)
  });

  const mutation = useMutation({
    mutationFn: (data) => apiClient.patch(`/runs/${id}/`, data),
    onSuccess: () => {
      toast.success('Run updated!');
      navigate('/dashboard');
    },
    onError: () => toast.error('Update failed')
  });

  if (isLoading) return <CircularProgress />;

  if (run) {
    setValue('run_type', run.run_type);
    setValue('distance_km', run.distance_km);
    setValue('duration_minutes', run.duration_minutes);
    setValue('notes', run.notes);
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>Edit Run</Typography>
        <form onSubmit={handleSubmit(mutation.mutate)}>
          <TextField
            select
            fullWidth
            label="Run Type"
            {...register('run_type')}
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
            {...register('distance_km')}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Duration (minutes)"
            type="number"
            fullWidth
            {...register('duration_minutes')}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Notes"
            multiline
            rows={3}
            fullWidth
            {...register('notes')}
            sx={{ mb: 2 }}
          />

          <Button 
            type="submit" 
            variant="contained" 
            fullWidth
            disabled={mutation.isPending}
          >
            {mutation.isPending ? <CircularProgress size={24} /> : 'Update Run'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}