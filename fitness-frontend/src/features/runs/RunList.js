import { useQuery } from '@tanstack/react-query';
import { Box, Typography, List, ListItem, ListItemText, IconButton, CircularProgress } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import apiClient from '../../api/client';
import { useNavigate } from 'react-router-dom';

export default function RunList() {
  const navigate = useNavigate();
  const { data: runs, isLoading } = useQuery({
    queryKey: ['runs'],
    queryFn: () => apiClient.get('/runs/').then(res => res.data)
  });

  const handleEdit = (id) => navigate(`/edit-run/${id}`);

  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>All Runs</Typography>
      <List>
        {runs?.map((run) => (
          <ListItem 
            key={run.id}
            secondaryAction={
              <>
                <IconButton onClick={() => handleEdit(run.id)}>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={`${run.run_type} - ${run.distance_km}km`}
              secondary={`Duration: ${run.duration_minutes} mins | Date: ${new Date(run.date).toLocaleDateString()}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}