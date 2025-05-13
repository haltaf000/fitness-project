import { useQuery } from '@tanstack/react-query';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import apiClient from '../../api/client';
import ProgressChart from '../../components/ProgressChart';
import WeightChart from '../../components/WeightChart';

export default function Dashboard() {
  const { data: runs, isLoading: runsLoading } = useQuery({
    queryKey: ['runs'],
    queryFn: () => apiClient.get('/runs/').then(res => res.data)
  });

  const { data: weights, isLoading: weightLoading } = useQuery({
    queryKey: ['weight'],
    queryFn: () => apiClient.get('/weight/').then(res => res.data)
  });

  if (runsLoading || weightLoading) return <CircularProgress />;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <ProgressChart 
            title="Running Distance"
            labels={runs?.map(run => new Date(run.date).toLocaleDateString())}
            data={runs?.map(run => run.distance_km)}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <WeightChart data={weights} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Recent Runs</Typography>
            {runs?.slice(0, 3).map(run => (
              <Box key={run.id} sx={{ mb: 2, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <Typography>{run.run_type} - {run.distance_km}km</Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(run.date).toLocaleDateString()}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Latest Weight</Typography>
            {weights?.[0] ? (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3">{weights[0].weight_kg} kg</Typography>
                <Typography color="text.secondary">
                  {new Date(weights[0].date).toLocaleDateString()}
                </Typography>
                {weights[0].body_fat_percentage && (
                  <Typography>Body Fat: {weights[0].body_fat_percentage}%</Typography>
                )}
              </Box>
            ) : (
              <Typography>No weight entries</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}