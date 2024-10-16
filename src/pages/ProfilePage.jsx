import React, { useState, useContext, useEffect } from 'react';
import useAxiosAuth from '../utils/api';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const axiosAuth = useAxiosAuth();

  // Fetch profile data when component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosAuth.get('https://api.freeapi.app/api/v1/users/profile');
        setProfile(response.data);
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to load profile.';
        setError(errorMessage);
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [axiosAuth]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true); // Prevent multiple form submissions
    try {
      await axiosAuth.put('https://api.freeapi.app/api/v1/users/profile', profile);
      setError(''); // Clear any previous errors
      alert('Profile updated successfully!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Profile update failed.';
      setError(errorMessage);
      console.error('Failed to update profile', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <form onSubmit={handleUpdate} className="p-6 max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Updating...' : 'Update Profile'}
      </button>
    </form>
  );
};

export default ProfilePage;
