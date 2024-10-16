import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:underline">Dashboard</Link>
        </div>
        <div className="flex items-center">
          {auth ? (
            <>
              <Link to="/profile" className="px-4 hover:underline">Profile</Link>
              <button 
                onClick={handleLogout} 
                className="px-4 hover:underline focus:outline-none"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 hover:underline">Login</Link>
              <Link to="/signup" className="px-4 hover:underline">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
