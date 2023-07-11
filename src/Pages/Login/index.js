import React, { useState } from "react";
import axios from 'axios';
import awan2 from '../../img/awan2.webp';

function PageContent_Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://backend-rouge-five.vercel.app/users/login', { email, password });
      console.log(response.data); 
      alert('Login Berhasil');
      onLogin();
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        alert('Email atau Password salah');
      } else {
        setError('Terjadi kesalahan saat login.');
        alert('Terjadi kesalahan saat login.');
      }
    }
  };
  
  return (
    <div className="login-container">
      <img src={awan2} alt="Awan2" className="welcome-image1" />
      <h2 className="welcome-1">Selamat Datang di WeatherNow!</h2>
      <h3 className="welcome-2">Silahkan Login</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="switch-to-login"
      >
        {showPassword ? "Sembunyikan Password" : "Tampilkan Password"}
      </button>
      <br />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={onSwitchToRegister} className="switch-to-login">
        Belum punya akun? Registrasi
      </button>
    </div>
  );
}

export default PageContent_Login;
