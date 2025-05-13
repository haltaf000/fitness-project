import { useQuery } from '@tanstack/react-query';
import { Box, Typography, List, ListItem, ListItemText, IconButton, CircularProgress } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import apiClient from '../../api/client';

export default function WeightList() {
  const { data: weights, isLoading } = useQuery({
    queryKey: ['weight'],
    queryFn: () => apiClient.get('/weight/').then(res => res.data)
  });

  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Weight History</Typography>
      <List>
        {weights?.map((entry) => (
          <ListItem 
            key={entry.id}
            secondaryAction={
              <>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={`${entry.weight_kg} kg`}
              secondary={`${new Date(entry.date).toLocaleDateString()} - Body Fat: ${entry.body_fat_percentage || 'N/A'}%`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}