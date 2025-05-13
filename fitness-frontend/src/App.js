import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Layout/Navbar';
import Home from './features/home/Home';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './features/dashboard/Dashboard';
import AddRun from './features/runs/AddRun';
import EditRun from './features/runs/EditRun';
import RunList from './features/runs/RunList';
import WeightList from './features/weight/WeightList';
import Profile from './features/profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navbar />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-run" element={<AddRun />} />
            <Route path="/edit-run/:id" element={<EditRun />} />
            <Route path="/runs" element={<RunList />} />
            <Route path="/weight" element={<WeightList />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}