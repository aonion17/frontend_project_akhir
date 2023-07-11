import React from 'react';
import { NavLink } from 'react-router-dom';
import awan from '../../img/awan.png';

const Homepage = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-title">Selamat datang di WeatherNow!</h1>
      <img src={awan} alt="Awan" className="welcome-image" />
      <p className="welcome-p">
        Pantau dan dapatkan informasi cuaca terkini di kota Anda dengan mudah.
        WeatherNow adalah sumber terpercaya untuk melihat perkiraan cuaca yang
        akurat dan terkini. Dengan layanan kami, Anda dapat dengan cepat
        mengetahui kondisi cuaca saat ini, suhu, kelembaban, kecepatan angin,
        dan banyak lagi.
      </p>
      <br />
      <NavLink to="/cuaca" activeClassName="active-link">
        <button className="cta-button">Ke Halaman Cuaca</button>
      </NavLink>
    </div>
  );
};

export default Homepage;