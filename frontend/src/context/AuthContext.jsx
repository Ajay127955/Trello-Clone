import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = async (token) => {
    try {
      const response = await api.get('me/');
      setUser({ ...response.data, token });
    } catch (err) {
      console.error('[Auth] FetchMe failed:', err);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetchMe(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (identifier, password) => {
    const response = await api.post('token/', { username: identifier, password });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    await fetchMe(response.data.access);
    return response.data;
  };

  const register = async (username, password, email) => {
    const response = await api.post('register/', { username, password, email });
    // Returns OTP sent message
    return response.data;
  };

  const verifyRegistration = async (username, password, email, otp) => {
    const response = await api.post('verify-otp/', { username, password, email, otp });
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      setUser({ ...response.data.user, token: response.data.access });
    }
    return response.data;
  };

  const googleLogin = async (email, name) => {
    const response = await api.post('google-login/', { email, name }, {
      headers: { 'X-Social-Verify': 'productive-flow-demo-secret' }
    });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    setUser({ ...response.data.user, token: response.data.access });
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  };

  const updateUser = async (data) => {
    const response = await api.patch('auth/update_profile/', data);
    setUser(prev => ({ ...prev, ...response.data }));
    return response.data;
  };

  return (
    <AuthContext.Provider value={{ user, login, register, verifyRegistration, googleLogin, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
