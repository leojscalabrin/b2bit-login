import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Profile from './components/Profile/UserProfile.tsx';
import Login from './components/Login/LoginForm.tsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

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
      const response = await axios.post<{ user: any, tokens: any }>('https://api.homologation.cliqdrive.com.br/auth/login/', {
        email: email,
        password: password
      });
      const { user, tokens } = response.data;
      handleLoginSuccess();
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={isLoggedIn ? <Profile username="Bátima" email="herp@derp.com" onLogout={handleLogout} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
