import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import apiClient from '../../api/client';
import toast from 'react-hot-toast';

const schema = yup.object({
  weight_kg: yup.number().positive().required(),
  body_fat_percentage: yup.number().min(0).max(100),
});

export default function AddWeight() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await apiClient.post('/weight/', data);
      toast.success('Weight logged successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to save weight entry');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>Log Weight</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Weight (kg)"
            type="number"
            {...register('weight_kg')}
            error={!!errors.weight_kg}
            helperText={errors.weight_kg?.message}
            sx={{ mb: 2 }}
          />
          
          <TextField
            fullWidth
            label="Body Fat %"
            type="number"
            {...register('body_fat_percentage')}
            error={!!errors.body_fat_percentage}
            helperText={errors.body_fat_percentage?.message}
            sx={{ mb: 2 }}
          />

          <Button type="submit" variant="contained" fullWidth>
            Save Entry
          </Button>
        </form>
      </Paper>
    </Container>
  );
}