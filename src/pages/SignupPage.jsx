import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password validation regex: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special char
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check email format
    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return;
    }

    // Check password strength
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://api.freeapi.app/api/v1/users/register', { username, email, password });
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Signup failed. Please try again.');
      } else {
        setError('Signup failed. Please try again.');
      }
      console.error('Signup failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-[#f3f5ec] mt-20">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className={`bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Signing Up...' : 'Signup'}
      </button>
    </form>
  );
};

export default SignupPage;
