import { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '../api/client';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      // Add token validation here if needed
      setUser({ username: 'Existing User' });
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await apiClient.post('/token/', { username, password });
    localStorage.setItem('access_token', response.data.access);
    setUser({ username });
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);