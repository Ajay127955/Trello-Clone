import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Guard: error.response is undefined for network errors (server down, CORS, etc.)
    if (!error.response) {
      console.error('[API] Network error — server may be unreachable:', error.message);
      window.dispatchEvent(new CustomEvent('show-toast', { 
        detail: { 
          message: 'Server is currently unreachable. Please check if the backend is running.', 
          type: 'error' 
        } 
      }));
      return Promise.reject(error);
    }

    // Only attempt token refresh on 401 responses
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axios.post(`${API_URL}token/refresh/`, {
            refresh: refreshToken,
          });
          localStorage.setItem('access_token', response.data.access);
          api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
          return api(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login';
        }
      } else {
        // No refresh token — clear auth and redirect
        localStorage.removeItem('access_token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
