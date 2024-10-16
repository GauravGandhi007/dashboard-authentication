import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('https://api.freeapi.app/api/v1/users/forgot-password', { email });
      setMessage(response.data.message || 'Check your email for a reset link.');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setMessage('The requested resource was not found. Please check the URL or the API documentation.');
        } else {
          setMessage(error.response.data.message || 'An error occurred. Please try again.');
        }
      } else {
        setMessage('Network error. Please check your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
        {message && <p className="text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button 
            type="submit" 
            className={`bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500">Cancel</button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
