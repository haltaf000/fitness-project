import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import { TextField, Button, Box, Avatar, Typography } from '@mui/material';
import apiClient from '../../api/client';
import toast from 'react-hot-toast';

export default function Profile() {
  const { user, updateUser } = useAuth();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      height: user?.height,
      birth_date: user?.birth_date?.split('T')[0]
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.patch(`/users/${user.id}/`, data);
      updateUser(response.data);
      toast.success('Profile updated!');
    } catch (error) {
      toast.error('Update failed');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar sx={{ 
          width: 120, 
          height: 120, 
          fontSize: 48,
          bgcolor: 'primary.main',
          mb: 2
        }}>
          {user?.username[0]?.toUpperCase()}
        </Avatar>
        <Typography variant="h4">{user?.username}</Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Height (cm)"
          type="number"
          {...register('height')}
          sx={{ mb: 2 }}
        />
        
        <TextField
          fullWidth
          label="Birth Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          {...register('birth_date')}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" size="large">
          Update Profile
        </Button>
      </form>
    </Box>
  );
}