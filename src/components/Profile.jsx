import useAxiosAuth from '../utils/api';

const axiosAuth = useAxiosAuth();
useEffect(() => {
  const fetchProfile = async () => {
    try {
      const response = await axiosAuth.get('https://api.freeapi.app/api/v1/users/profile');
      // Handle response
    } catch (error) {
      console.error('Error fetching profile', error);
    }
  };

  fetchProfile();
}, []);
