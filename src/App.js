import { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";
import Login from "./Pages/Login";
import Register from "./Pages/Registrasi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSwitchToRegister = () => {
    setIsRegistering(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegistering(false);
  };

  useEffect(() => {
    // Ketika status login dan status registrasi berubah, atur tampilan SideMenu
    const shouldShowSideMenu = isLoggedIn && !isRegistering && window.location.pathname !== "/login";
    setShowSideMenu(shouldShowSideMenu);
  }, [isLoggedIn, isRegistering]);

  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        {showSideMenu && <SideMenu />}
        {isLoggedIn ? (
          <PageContent />
        ) : (
          isRegistering ? (
            <Register onSwitchToLogin={handleSwitchToLogin} />
          ) : (
            <Login onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />
          )
        )}
      </div>
    </div>
  );
}

export default App;
