import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeightChart({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { 
        display: true, 
        text: 'Weight Progress',
        font: { size: 16 }
      }
    },
    scales: {
      y: {
        title: { display: true, text: 'Weight (kg)' }
      }
    }
  };

  const chartData = {
    labels: data?.map(entry => new Date(entry.date).toLocaleDateString()) || [],
    datasets: [
      {
        label: 'Weight',
        data: data?.map(entry => entry.weight_kg) || [],
        borderColor: '#14b8a6',
        backgroundColor: 'rgba(20, 184, 166, 0.2)',
        tension: 0.4,
      }
    ]
  };

  return <Line options={options} data={chartData} />;
}