import { useState } from 'react';
import axios from 'axios';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = async (method, url, data = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({ method, url, data });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { makeRequest, loading, error };
};

export default useApi;