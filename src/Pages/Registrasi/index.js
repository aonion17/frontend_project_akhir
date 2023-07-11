import React, { useState } from "react";
import axios from 'axios';
import awan2 from '../../img/awan2.webp';

function PageContent_Register({ onLogin, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Nama, email, dan password tidak boleh kosong");
    } else if (!isValidEmail(email)) {
      alert("Email tidak valid");
    } else {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/users", {
          name,
          email,
          password,
        });
        alert("Registrasi berhasil");
        onSwitchToLogin();
      } catch (error) {
        console.log(error);
        alert("Registrasi gagal");
      }
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-container">
        <img src={awan2} alt="Awan2" className="welcome-image1" />
        <h2 className="welcome-1">Selamat Datang di WeatherNow!</h2>
        <h3 className="welcome-2">Silahkan Registrasi</h3>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
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
        <button onClick={handleRegister}>Registrasi</button>
        <br />
        <button onClick={onSwitchToLogin} className="switch-to-login">Kembali ke Login</button>
      
    </div>
  );
}

export default PageContent_Register;


