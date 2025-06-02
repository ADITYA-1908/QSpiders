import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fData = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(url);
      setFetchData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fData();
  }, []);

  return [loading, error, fetchData];
}
