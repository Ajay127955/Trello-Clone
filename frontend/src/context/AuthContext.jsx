import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = async (token) => {
    try {
      const response = await api.get('me/');
      if (response.data && response.data.username) {
        setUser({ ...response.data, token });
      } else {
        throw new Error('Invalid user data received');
      }
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

  const login = async (identifier, password, invitationToken = null) => {
    const data = { username: identifier, password };
    if (invitationToken) data.token = invitationToken;
    
    // Use our custom login endpoint that handles invitation tokens
    const response = await api.post('login/', data);
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    setUser({ ...response.data.user, token: response.data.access });
    return response.data;
  };

  const register = async (username, password, email, invitationToken = null) => {
    const data = { email, password };
    if (username && username.trim() !== "") {
      data.username = username;
    }
    if (invitationToken) data.token = invitationToken;
    
    const response = await api.post('register/', data);
    return response.data;
  };

  const verifyRegistration = async (username, password, email, otp, invitationToken = null) => {
    const data = { username, password, email, otp };
    if (invitationToken) data.token = invitationToken;
    
    const response = await api.post('verify-otp/', data);
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      setUser({ ...response.data.user, token: response.data.access });
    }
    return response.data;
  };

  const googleLogin = async (googleAccessToken, invitationToken = null) => {
    const data = { access_token: googleAccessToken };
    if (invitationToken) data.token = invitationToken;
    
    const response = await api.post('google-login/', data);
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    setUser({ ...response.data.user, token: response.data.access });
    return response.data;
  };

  const logout = async () => {
    try {
      await api.post('logout/');
    } catch (err) {
      console.error('[Auth] Backend logout failed:', err);
    }
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
