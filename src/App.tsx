import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './index.css';
import Profile from './components/Profile/UserProfile.tsx';
import Login from './components/Login/LoginForm.tsx';

interface UserProfile {
  name: string;
  email: string;
  avatar?: {
    image_high_url: string;
  };
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const token = localStorage.getItem('accessToken');
    return !!token;
  });
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('accessToken'));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (token: string) => {
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
    setIsLoggedIn(true);
    setErrorMessage(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    setUserProfile(null);
    setAccessToken(null);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (isLoggedIn && accessToken) {
        try {
          const response = await axios.get<UserProfile>('https://api.homologation.cliqdrive.com.br/auth/profile/', {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Accept': 'application/json;version=v1_web',
              'Content-Type': 'application/json',
            }
          });
          setUserProfile(response.data);
        } catch (error) {
          console.error('Erro ao buscar perfil do usuário:', error);
          handleLogout();
        }
      }
    };
    fetchUserProfile();
  }, [isLoggedIn, accessToken]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  axios.interceptors.request.use(function (config) {
    config.headers['Accept'] = 'application/json;version=v1_web';
    config.headers['Content-Type'] = 'application/json';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error: AxiosError) {
    if (error.response?.status === 401) {
      handleLogout();
    }
    return Promise.reject(error);
  });

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post<{ user: any, tokens: { access: string } }>(
        'https://api.homologation.cliqdrive.com.br/auth/login/', 
        { email, password }
      );
      const { tokens } = response.data;
      handleLoginSuccess(tokens.access);
    } catch (error) {
      setErrorMessage('Credenciais incorretas. Por favor, tente novamente.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Login onLogin={handleLogin} errorMessage={errorMessage} /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={isLoggedIn && userProfile ? <Profile {...userProfile} onLogout={handleLogout} /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
